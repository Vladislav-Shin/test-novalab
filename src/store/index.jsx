import { configureStore } from "@reduxjs/toolkit";
import users from "../components/Users/usersSlice";
import items from "../components/Unknowns/unknownSlice";
import 'antd/dist/antd.css';

const store = configureStore({
  reducer: { users, items },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
