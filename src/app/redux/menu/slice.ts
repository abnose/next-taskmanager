import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterSlice {
  isOpen: boolean;
}

const initialState: counterSlice = {
  isOpen: true,
};

// export const incrementedWithDelay = createAsyncThunk(
//   "counter/incAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => {
//       setTimeout(() => resolve, 1000);
//     });
//     return amount;
//   }
// );

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      console.log(state.isOpen, "redux", action.payload);
      state.isOpen = !state.isOpen;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(incrementedWithDelay.pending, () => {
  //         console.log("pending shit");
  //       })
  //       .addCase(
  //         incrementedWithDelay.fulfilled,
  //         (state, action: PayloadAction<number>) => {
  //           state.value += action.payload;
  //         }
  //       );
  //   },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
