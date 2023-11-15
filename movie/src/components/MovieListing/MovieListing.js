import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieListing/MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  
  const renderMovies = movies.data?.Search?.map((movies, index) => {
    return <MovieCard Data={movies} key={index}  showFavAdd={true} remove={false}/>;
  });

  const renderShows = shows.data?.Search?.map((movies, index) => {
    return <MovieCard Data={movies} key={index} showFavAdd={true} remove={false}/>;
  });

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h1>Movies</h1>
        <div className="movies-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h1>Shows</h1>
        <div className="movies-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
