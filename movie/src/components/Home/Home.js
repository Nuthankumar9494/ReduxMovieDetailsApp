import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchMoviesShows } from "../../features/movies/movieSlice";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchMoviesShows());
  }, [dispatch]);

  

  return (
    <div className="container">
    {/* <div className="banner-img"></div> */}
      <MovieListing />
      <ToastContainer />
    </div>
  );
};

export default Home;
