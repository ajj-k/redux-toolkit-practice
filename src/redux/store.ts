import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;