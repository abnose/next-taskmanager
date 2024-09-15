import { useEffect, useReducer, useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Pagination from "@mui/material/Pagination";
import { IconButton, PaginationItem, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { enToFaNumber } from "../utils/utils";

export interface IHeader {
  title: string;
  key: string;
  filter?: JSX.Element | undefined;
  filterType?: string;
  render?: (row: any) => JSX.Element | JSX.Element | undefined;
}

interface ICol {
  [key: string]: any;
}

export interface ITableItem {
  header: IHeader[];
  col: ICol;
  pagination: boolean;
  paginationType: "local" | "server";
  onPageChange: (page: number) => void;
  totalItem: number;
  filterType: "local" | "server";
  clearFilter: () => void | undefined;
  onSearch: () => void | undefined;
  filterdItem: ICol;
  isLoading: boolean;
}

interface IAction {
  type: "filterInit" | "initCols" | "pageChange";
  page?: number;
  cols?: ICol;
}

let size = 10;
let items: ICol = [];

function* chunks(arr: ICol, n: number): any {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

const colsReducer = (state: ICol[], action: IAction) => {
  const { type } = action;
  switch (type) {
    case "initCols":
      return [...chunks(action.cols!, 10)];
    case "filterInit":
      return [...chunks(action.cols!, 10)];
    case "pageChange":
      return [items[action.page!]];
    default:
      return state;
  }
};

export default function BaseTable({
  header,
  col,
  pagination = false,
  paginationType = "local",
  filterType = "local",
  onPageChange,
  totalItem,
  clearFilter,
  onSearch,
  filterdItem,
  isLoading,
}: ITableItem) {
  const [state, dispach] = useReducer(colsReducer, []);
  const initCols = col;
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [totalItems, setTotalItems] = useState(totalItem);
  let totalPages = Math.ceil(totalItems / size);

  const handlePageChange = (_event: MouseEvent, page: number) => {
    if (paginationType == "server") {
      onPageChange(page);
    } else {
      setPageNumber(page - 1);
    }
  };

  useEffect(() => {
    if (paginationType == "local") {
      dispach({ type: "initCols", page: 1, cols: initCols });
    } else {
      //   setColsItem(col);
    }
  }, []);

  const handleFilter = () => {
    if (filterType == "server") {
    } else {
      onSearch();
    }
  };

  const handleInitCols = () => {
    dispach({ type: "initCols", page: 1, cols: initCols });
    setTotalItems(initCols?.length);
    totalPages = Math.ceil(totalItems / size);
    setPageNumber(0);
  };

  const handleDelete = () => {
    handleInitCols();
    clearFilter();
  };
  console.log(state);
  const filterArray = (array: ICol, criteria: ICol) => {
    return array.filter((item: ICol) => {
      return Object.keys(criteria).every((key) => {
        return item[key].toString().includes(criteria[key]);
      });
    });
  };

  useEffect(() => {
    if (
      !Object.keys(filterdItem).length ||
      Object.keys(filterdItem).every((key) => filterdItem[key] == "")
    ) {
      handleInitCols();
      return;
    }
    if (filterType == "local") {
      const filterData = filterArray(initCols, filterdItem);
      dispach({ type: "filterInit", page: 0, cols: filterData });
      setTotalItems(filterData?.length);
      totalPages = Math.ceil(totalItems / size);
      setPageNumber(0);
    } else {
    }
  }, [filterdItem]);

  const handleNumbers = (item) => {
    item.page = enToFaNumber(item.page);
    return <PaginationItem {...item} />;
  };

  return (
    <div className="flex  flex-col h-full w-full border-2 border-gray-50 bg-white rounded-md overflow-hidden shadow-md">
      <div
        dir="rtl"
        className="flex-grow overflow-auto customScroll border-2 border-gray-100 sm:rounded-lg relative anima"
      >
        {!isLoading && (
          <table
            className="relative w-full  border text-sm  dark:bg-white rtl:text-right text-gray-800 dark:text-gray-400"
            // className="w-full  text-sm dark:bg-white text-left rtl:text-right text-gray-800 dark:text-gray-400"
          >
            <>
              <thead className=" z-50 text-base sticky top-[-1px] text-gray-700 bg-gray-50 dark:bg-gray-100 dark:text-gray">
                <tr>
                  <th className="px-6 py-4 text-center">ردیف</th>
                  {header.map((item: IHeader) => (
                    <th
                      key={item.key}
                      scope="col"
                      className="px-6 py-4 text-center"
                    >
                      {item?.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <thead className="text-xs h-[80px] text-gray-800 border-b-2 dark:border-gray-100/50">
                <tr>
                  <th>
                    <Tooltip title="جستجو">
                      <IconButton onClick={handleFilter} aria-label="search">
                        <SearchIcon sx={{ color: "darkgray" }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="پاک کردن">
                      <IconButton onClick={handleDelete} aria-label="delete">
                        <CloseIcon sx={{ color: "red" }} />
                      </IconButton>
                    </Tooltip>
                  </th>
                  {header.map((item: IHeader, index: number): any => {
                    if (item.filter) {
                      return (
                        <th key={item.key} className="">
                          <div className="mx-1">{item?.filter}</div>
                        </th>
                      );
                    } else {
                      return (
                        <th key={item.key}>
                          <></>
                        </th>
                      );
                    }
                  })}
                </tr>
              </thead>
              <tbody className="dark:bg-white">
                {state[pageNumber]?.map((item: ICol, i: number) => (
                  <tr
                    key={i}
                    className="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-50 dark:border-b-2 dark:border-gray-100"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-950 text-center">
                      {enToFaNumber(+(pageNumber * 10) + i + 1)}
                    </td>
                    {header.map((el: IHeader) => {
                      if (typeof el.render != "function") {
                        return (
                          <td
                            key={el.key}
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-950 text-center"
                          >
                            {item[el.key]}
                          </td>
                        );
                      } else {
                        return (
                          <td
                            key={el.key}
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-950 text-center"
                          >
                            <>{el?.render(item)}</>
                          </td>
                        );
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </>
          </table>
        )}
        {state.length == 0 && isLoading == false ? (
          <div className="emptyTable flex-col">
            <Image
              src={"/NotFound.png"}
              alt={"not found"}
              width="154"
              height="154"
            />
            <Typography className="text-gray-900">موردی یافت نشد</Typography>
          </div>
        ) : (
          <></>
        )}
        {pagination && state.length && !isLoading ? (
          <div className="flex justify-center sticky bottom-[0px] items-center dark:bg-gray-50 w-[100%] text-gray-800 p-2 rounded-md">
            <Pagination
              onChange={handlePageChange}
              page={pageNumber + 1}
              count={totalPages}
              size={"large"}
              renderItem={handleNumbers}
            />
            <Box className="text-gray-800">
              تعداد کل : {enToFaNumber(totalItems)}
            </Box>
          </div>
        ) : (
          <></>
        )}

        {isLoading == true ? (
          <div className="flex justify-center fixed h-full bottom-[20px] items-center dark:bg-white/80 w-full loadingTable z-[5000000]">
            <Box className="text-gray-800">
              <div className="loader"></div>
            </Box>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
