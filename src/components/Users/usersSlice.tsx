import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetched: (state, action) => {
      state.users = action.payload;
    },
  },
});

const { actions, reducer } = usersSlice;

export default reducer;
export const { usersFetched } = actions;
