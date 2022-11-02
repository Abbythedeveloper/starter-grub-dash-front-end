import React from "react";
import headerImage from "./header.jpg";

const style = {
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundSize: "100% auto",
};

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid text-white mb-0" style={style}>
      <div className="container">
        <h1 className="display-1">Appa.</h1>
        <p className="lead">
          The best restaurants near you deliver with <em>Appa</em>!
        </p>
      </div>
    </div>
  );
}

export default Header;
