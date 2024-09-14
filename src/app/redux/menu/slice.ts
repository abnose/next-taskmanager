import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface counterSlice {
  isOpen: boolean;
  randomQuotes: any;
}

const initialState: counterSlice = {
  isOpen: true,
  randomQuotes: { writer: "", description: "" },
};

export const getRandomQuotesHandler = createAsyncThunk(
  "menu/getRandomQuotes",
  async () => {
    let firstCall;
    try {
      firstCall = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
      );
    } catch (err) {
      console.log("faild to catch api");
    }
    return firstCall;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      console.log(state.isOpen, "redux", action.payload);
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomQuotesHandler.pending, () => {
        console.log("pending");
      })
      .addCase(
        getRandomQuotesHandler.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.randomQuotes.writer = action.payload.data[0].title.rendered;
          state.randomQuotes.description =
            action.payload.data[0].content.rendered;
          // console.log(action.payload.data[0].title.rendered, "done");
          // console.log(state, "done");
        }
      );
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
