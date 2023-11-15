import React, { useEffect } from "react";
import "../MovieDetails/MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMoviesShowsOnId, getMoviesonId } from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const { imdbID } = useParams();
  console.log(imdbID)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((fetchMoviesShowsOnId(imdbID)))
  }, [dispatch, imdbID]);

const data = useSelector(getMoviesonId)
console.log(data);

  return (
    <div className="back-groundImg">
      <div className="totalDetails">
        <div className="poster1">
          <img
            src={data?.data?.Poster}
            alt="poster"
          />
        </div>
        <div className="MovieDetails">
          <div className="MovieTitle">{data?.data?.Title}</div>
          <div className="movieRating">
            <ul>
              <li>IMDB 1.0</li>
              <li>IMDB 1.10</li>
              <li>IMDB 1.10</li>
              <li>IMDB 1.0</li>
            </ul>
            <hr />
          </div>
          <div className="movieActors">
            <div className="item">
              <strong>Actors:</strong><span>{data?.data?.Actors}</span>
            </div>
            <div className="item">
              <strong>Awards:</strong><span>{data?.data?.Awards}</span>
            </div>
            <div className="item">
              <strong>Director:</strong><span>{data?.data?.Director}</span>
            </div>
            <div className="item">
              <strong>Year:</strong><span>{data?.data?.Year}</span>
            </div>
            <div className="item">
              <strong>Languages:</strong><span>{data?.data?.Language}</span>
            </div>
            <div className="item">
              <strong>BoxOffice:</strong><span>{data?.data?.BoxOffice}</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
