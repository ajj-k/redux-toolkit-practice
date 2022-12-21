import { createSlice } from '@reduxjs/toolkit';

interface counter {
  count: number
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increase: (state, action) => {
      state.count += action.payload;
    },
    decrease: (state, action) => {
      state.count -= action.payload;
    }
  }
})

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;