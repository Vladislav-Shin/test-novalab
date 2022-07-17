import { configureStore } from "@reduxjs/toolkit";
import users from "../components/users/usersSlice";
import items from "../components/colors/colorsSlice";
import 'antd/dist/antd.css';

const store = configureStore({
  reducer: { users, items },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
