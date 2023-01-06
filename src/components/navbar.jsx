import React, { Component } from "react";

// stateless functional component
// when dealing with simple components
const Navbar = ({totalCounters}) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-2">
            {/* removing the this keyword when passing in the props argument in the function */}
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
