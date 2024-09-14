import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/slice";
// import counterReducer from "./counter/slice";
// import multiplyReducer, { multiply } from "./multiply/slice";
const rootReducer = combineReducers({
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
