import { configureStore } from '@reduxjs/toolkit';
import hitsReducer from './slices/hitsSlices';

export const store = configureStore({
  reducer: {
    hits: hitsReducer
  }
});

export default store;
