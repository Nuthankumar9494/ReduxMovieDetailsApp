import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png";
import netflix from "../Images/nextflix.png";
import "./Header.scss";
import ScroolListener from "../ScroolListener";

const Header = () => {
  const [onShow, setOnShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const hamburg = () => {
    setOnShow(!onShow);
  };

  const handleScrollChange = (newScrollY) => {
    setScrollY(newScrollY);
  };
  return (
    <div className={`${scrollY ? 'header1' : 'header'}`}>
      <ScroolListener onScrollChange={handleScrollChange}/>
      <Link to="/">
        <span href="#" className="Applogo">
          <img src={netflix} alt="imgNetflix" />
        </span>
      </Link>
      <div className="list">
        <ul>
          <li>Movies</li>
          <li>Tv Shows</li>
          <li>People</li>
          <li>More</li>
          <Link to='/favouritemovies'><li>FavouriteMoivies</li></Link>
        </ul>
      </div>
      {onShow && (
        <div id="open">
          <ul>
            <li>Movies</li>
            <li>Tv Shows</li>
            <li>People</li>
            <li>More</li>
            <Link to='/favouritemovies'><li>FavouriteMoivies</li></Link>
          </ul>
        </div>
      )}
      <span className="hamburg" onClick={() => hamburg()}>
        <i class="fa-solid fa-arrow-right"></i>
      </span>

      <div className="logo">
        <img src={user} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
