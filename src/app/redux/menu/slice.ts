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
    try {
      const response = await axios.get(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`
      );
      // Only return the necessary data (serialized)
      return {
        writer: response.data[0].title.rendered,
        description: response.data[0].content.rendered,
      };
    } catch (err) {
      console.log("Failed to fetch quotes", err);
      throw err; // To handle error properly in the reducer if needed
    }
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
      .addCase(getRandomQuotesHandler.pending, (state) => {
        console.log("pending");
      })
      .addCase(
        getRandomQuotesHandler.fulfilled,
        (state, action: PayloadAction<any>) => {
          // No need to access `action.payload.data`, just use the serialized data directly
          state.randomQuotes.writer = action.payload.writer;
          state.randomQuotes.description = action.payload.description;
          console.log("Random quote fetched successfully");
        }
      )
      .addCase(getRandomQuotesHandler.rejected, (state, action) => {
        console.error("Failed to fetch random quotes:", action.error.message);
      });
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
