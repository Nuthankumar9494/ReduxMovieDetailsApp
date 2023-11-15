import React from "react";
import "./footer.scss";
import instalogo from "../Images/youtube.webp";

const Footer = () => {
  return (
    <div>
    <div className="footer">
      <div>Movie App</div>
      <div>2023,Movi,@copyRights</div>
      <div  className="subscription"><img src={instalogo} alt=""/></div>
    </div>
   </div>
  );
};

export default Footer;
