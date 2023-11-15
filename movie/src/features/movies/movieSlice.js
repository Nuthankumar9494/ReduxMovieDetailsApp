import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
   return await MovieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
   
  }
);

export const fetchMoviesShows = createAsyncThunk(
  "movies/fetchAsyncMoviesShows",
  async () => {
    const series = "friends";
   return await MovieApi.get(
      `?apiKey=${APIKey}&s=${series}&type=series`
    );
   
  }
);

export const fetchMoviesShowsOnId = createAsyncThunk(
  "movies/fetchAsyncMoviesShowsonId",
  async (id) => {
   return await MovieApi.get(
      `?apiKey=${APIKey}&i=${id}&Plot=full`
    );
   
  }
);

const initialState = {
  movies: {},
  shows:{},
  MovieDetails:{},
  favouriteMovies:[],
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, {payload}) => {
      state.movies = payload;
    },
    addFavourite : (state,action)=>{
      console.log(action.payload)
      state.favouriteMovies.push(action.payload);
    },
    removeFavourite : (state,action)=>{
      state.favouriteMovies = state.favouriteMovies.filter((ele)=> ele.imdbID !== action.payload)
    }
  },
  extraReducers: builder=>{
  builder.addCase(fetchMovies.pending,state=>{
   console.log("pending")
  })
  builder.addCase(fetchMovies.fulfilled,(state,action)=>{
    state.movies=action.payload
  })
  builder.addCase(fetchMovies.rejected,(state,action)=>{
    state.movies={}
  })
  builder.addCase(fetchMoviesShows.fulfilled,(state,action)=>{
    state.shows=action.payload
  })
  builder.addCase(fetchMoviesShowsOnId.fulfilled,(state,action)=>{
    state.MovieDetails=action.payload
  })
  },
});

export const { getMovies } = movieSlice.actions;
export const { addFavourite } = movieSlice.actions;
export const { removeFavourite } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state)=> state.movies.shows;
export const getMoviesonId = (state)=> state.movies.MovieDetails;
export const getFavourite = (state)=> state.movies.favouriteMovies;
export default movieSlice.reducer;
