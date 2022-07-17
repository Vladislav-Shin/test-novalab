import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemsFetched: (state, action) => {
      state.items = action.payload;
    },
  },
});

const { actions, reducer } = itemsSlice;

export default reducer;
export const { itemsFetched } = actions;
