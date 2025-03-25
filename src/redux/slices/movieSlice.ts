import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllMoviesApi } from "../../core/utils/api/get-all-movies";

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async (page: number, { rejectWithValue }) => {
    try {
      return await fetchAllMoviesApi(page);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null as string | null,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage } = movieSlice.actions;
export default movieSlice.reducer;
