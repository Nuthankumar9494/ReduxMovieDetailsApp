import { useSelector } from "react-redux";
import { getFavourite } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import './favmovie.scss'

const Favourite = () => {
  const data = useSelector(getFavourite);
  
  console.log(data);
  const renderFavorite = data.map((movies, index) => {
    return <MovieCard Data={movies} key={index} showFavAdd={false} remove={true}/>;
  });

//   const noMoviesFound = (()=>{
//     return <div className="bgcolor"> No Favourite Movies Found.
//         <Link to='/'>Go to movies</Link>
//     </div>
//   })

  return  <div className="favmovie-wrapper">
     <div className="movie-list">
        <div className="movies-container">{renderFavorite}</div>
      </div>
  </div>;
};

export default Favourite;
