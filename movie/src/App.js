import React from 'react'
import './App.scss';
import { Routes,Route} from "react-router-dom"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/footer/Footer';
import Favourite from './components/AddFavourite/Favourite';

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
      <Route path='/favouritemovies' element={<Favourite/>}/>
      <Route element={<PageNotFound/>} path='*'/>
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
