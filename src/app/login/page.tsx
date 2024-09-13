"use client";
import { IconButton, TextField, Tooltip } from "@mui/material";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Button, Stack } from "@mui/material";
// import Login from "./pages/Login/Login";
import CustomTextInput from "@/app/components/CustomTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import { yupResolver } from "@hookform/resolvers/yup";
import { IHeader } from "@/app/components/BaseTable";
import CreateIcon from "@mui/icons-material/Create";
const Login = () => {
  const [filterdItems, setFilterdItems] = useState({});
  const defaultValues = {
    order: "",
    desc: "",
  };

  const loginSchema = yup.object({
    order: yup.string().notRequired(),
    desc: yup.string().notRequired(),
  });
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues,
  });

  const data = [
    {
      order: 1,
      desc: "dont have xxx 1",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 2",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 3",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 4",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 5",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 6",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 7",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 7",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 7",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx 7",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have xxx",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy",
      deadline: "dfsa",
      status: "sdfa",
      amount: 5,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz 5",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz 4",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have zzzzzzzzz 3",
      deadline: "dfsfffffffffffa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 3,
      desc: "dont have",
      deadline: "dfsfffffffffffa 2",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont has",
      deadline: "dfsfffffffffffa 1",
      status: "sdfa",
      amount: 4,
    },
  ];

  const edit = (item) => {
    console.log(item);
  };

  const deleted = (item) => {
    console.log(item);
  };

  const header: IHeader[] = [
    {
      title: "ترتیب",
      key: "order",
      filter: (
        <CustomTextInput
          name="order"
          label="ترتیب"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "توضیح",
      key: "desc",
      filter: (
        <CustomTextInput
          name="desc"
          label="توضیح"
          control={control}
          errors={errors}
        />
      ),
    },
    {
      title: "deadline",
      key: "deadline",
    },
    {
      title: "status",
      key: "status",
    },
    {
      title: "amount",
      key: "amount",
    },
    {
      title: "custom",
      key: "render",
      render: (row) => (
        <>
          <Tooltip title="ویرایش">
            <IconButton
              onClick={() => {
                edit(row);
              }}
              aria-label="search"
            >
              <CreateIcon sx={{ color: "orange" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton
              onClick={() => {
                deleted(row);
              }}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Tooltip>
        </>
      ),
    },
  ];

  const handlePageChange = (page) => {
    console.log(page, "parent");
  };

  const handleClearFilter = () => {
    reset();
  };

  const handleSearch = () => {
    setFilterdItems({
      order: getValues("order"),
      desc: getValues("desc"),
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "95%",
          padding: "25px",
          marginLeft: "100px",
        }}
      >
        <BaseTable
          header={header}
          col={data}
          pagination={true}
          paginationType="local"
          filterType="local"
          totalItem={data?.length}
          onPageChange={handlePageChange}
          clearFilter={handleClearFilter}
          onSearch={handleSearch}
          filterdItem={filterdItems}
        />
      </Box>
      {/* <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
      /> */}
    </>
  );
};

export default Login;
