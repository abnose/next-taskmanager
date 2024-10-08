"use client";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import BaseTable from "../components/BaseTable";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Box, Button, Stack } from "@mui/material";
// import Login from "./pages/Login/Login";
import CustomTextInput from "@/app/components/CustomTextInput";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import { yupResolver } from "@hookform/resolvers/yup";
import { IHeader } from "@/app/components/BaseTable";
import CreateIcon from "@mui/icons-material/Create";
import BasePage from "../components/BasePage";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
const Login = () => {
  const [filterdItems, setFilterdItems] = useState({});
  const defaultValues = {
    order: "",
    desc: "",
    password: "",
    userName: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginSchema = yup.object({
    order: yup.string().notRequired(),
    desc: yup.string().notRequired(),
    password: yup.string().required("الزامی است"),
    userName: yup.string().required("الزامی است"),
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
      desc: "dont have yyyyy787777777777777",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy99999999999999",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyy88888888888888y",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy777777777777",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy66666666666666",
      deadline: "dfsa",
      status: "sdfa",
      amount: 4,
    },
    {
      order: 1,
      desc: "dont have yyyyy 555555555",
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
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <BasePage>
        <>
          <div className="absolute w-72 h-72 bg-gradient-to-br from-gray-500 to-gray-800 rounded-full top-[-50px] right-[300px] z-negative"></div>
          <div className="absolute w-48 h-48 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full bottom-[-50px] left-[300px] z-negative"></div>
          <Box className="p-5 w-96 relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[500px] bg-white/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="flex w-full justify-center items-center my-[1.5em]">
                <AccountCircleIcon
                  sx={{
                    color: "#18283b",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "175px",
                  }}
                />
              </Box>
              <Box className="grid max-sm:grid-cols-1 max-md:grid-cols-1 md:grid-cols-1 items-center justify-center w-full gap-2 ">
                <CustomTextInput
                  name="userName"
                  label="ایمیل یا نام کاربری"
                  control={control}
                  errors={errors}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <FormControl variant="outlined" error={!!errors.password}>
                      <InputLabel htmlFor="outlined-adornment-password">
                        رمز عبور
                      </InputLabel>
                      <OutlinedInput
                        {...field}
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => field.onChange(e.target.value)}
                        startAdornment={
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: "10px" }}
                          >
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="start"
                              sx={{}}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                      {errors.password && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{
                            display: "flex",
                            mt: "3px",
                            ml: "14px",
                            justifyContent: "left",
                          }}
                        >
                          {errors.password?.message}
                        </Typography>
                      )}
                    </FormControl>
                  )}
                />
                <Box className="flex mt-4">
                  <Box className="mr-auto">
                    <Button
                      variant="outlined"
                      type="submit"
                      startIcon={<LoginIcon />}
                    >
                      ورود
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </>
      </BasePage>
    </>
  );
};

export default Login;

// <BaseTable
//   header={header}
//   col={data}
//   pagination={true}
//   paginationType="local"
//   filterType="local"
//   totalItem={data?.length}
//   onPageChange={handlePageChange}
//   clearFilter={handleClearFilter}
//   onSearch={handleSearch}
//   filterdItem={filterdItems}
// />;
