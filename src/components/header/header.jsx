import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { options } from "../info/info";
const Header = () => {
  return (
    <div className="header--container">
      <div className="img-container">
        <img src="https://i.imgur.com/uKXmSvv.png" alt="logo" />
      </div>
      <div className="nav-container">
        {React.Children.toArray(
          options.map((item) => {
            return (
              <Link to={item.ruta}>
                <li>{item.nombre.toUpperCase()}</li>{" "}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Header;
