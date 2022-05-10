import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [357311, 67283],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;
      const newFavs = state.favorites.includes(idToAdd)
        ? state.favorites.filter((idNumber) => idNumber !== idToAdd)
        : [...state.favorites, idToAdd];

      state.favorites = newFavs;
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;
