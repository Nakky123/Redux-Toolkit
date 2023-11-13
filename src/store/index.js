import { configureStore } from "@reduxjs/toolkit";
import {
  songsReducer,
  addSong,
  removeSong,
  resetSong,
} from "./slices/songsSlice";
import {
  moveieReducer,
  addMovie,
  removeMovie,
  resetMovie,
} from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moveieReducer,
  },
});

export { store };
export { addMovie, removeMovie, resetMovie, addSong, removeSong, resetSong };
