import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovieCastApi, fetchMovieDetailsApi, fetchTrailerVideoApi } from "../../core/utils/api/get-movie-details";
import { MovieDetailsType } from "../../core/utils/types/MovieDetailsType";

export const getMovieDetails = createAsyncThunk(
    "movies/getMovieDetails",
    async (movieId: number, { rejectWithValue }) => {
      try {
        const movieDetails = await fetchMovieDetailsApi(movieId);
        
        // Fetch movie trailers
        const trailerData = await fetchTrailerVideoApi(movieId);
  
        // Get the first official trailer
        const trailer =
          trailerData.results.find((video: any) => video.type === "Trailer" && video.official) ||
          trailerData.results[0];

        // fetch movie cast
        const movieCast = await fetchMovieCastApi(movieId);
        console.log(movieCast);
        
  
        return { ...movieDetails,movieCast ,trailerKey: trailer?.key || "c8sf0c-cjzQ" };
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    details: null as MovieDetailsType | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        console.log("Redux State Payload:", action.payload); 
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

  },
});

export default movieDetailsSlice.reducer;
