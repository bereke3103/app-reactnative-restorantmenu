import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favourites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteReducer,
  },
});
