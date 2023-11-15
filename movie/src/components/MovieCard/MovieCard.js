import React, { useState } from "react";
import "../MovieCard/MovieCard.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../features/movies/movieSlice";

const MovieCard = (props) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const dispatch = useDispatch();

  const toggleFavorite = (details, e) => {
    setIsFavorited(true);
    dispatch(addFavourite(details.Data));
  };

  const oneRemoveFavMovie = (id) => {
    dispatch(removeFavourite(id));
  };

  return (
    <div className="card-list">
      <Link to={`/movie/${props.Data.imdbID}`}>
        <div className="card-body" key={props.Data.imdbID}>
          <div className="card">
            <div className="poster">
              <img src={props.Data?.Poster} alt="psoter" />
            </div>
          </div>
          <div className="movieTitle">
            <h4>{props.Data.Title}</h4>
            <h4>{props.Data.Year}</h4>
          </div>
        </div>
      </Link>
      {props.showFavAdd && (
        <div
          className={`star-button ${isFavorited ? "active" : ""}`}
          onClick={(e) => {
            toggleFavorite(props, e);
          }}
        >
          {isFavorited ? "★" : "☆"}
        </div>
      )}
      {props.remove && (
        <div
          className="remove"
          onClick={() => {
            oneRemoveFavMovie(props.Data.imdbID);
          }}
        >
          x
        </div>
      )}
    </div>
  );
};

export default MovieCard;
