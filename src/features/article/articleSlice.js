import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [],
  invoiceData: [],
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setWords: (state, action) => {
      state.words = action.payload;
    },
    setInvoiceData: (state, action) => {
      state.invoiceData = action.payload;
    },
  },
});
export const { setWords, setInvoiceData } = articleSlice.actions;
export default articleSlice.reducer;
