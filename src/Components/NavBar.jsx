import React from 'react';
import "./css/Navbar.css"
import { NavLink } from 'react-router-dom';


const Navbar=()=>{
  return (
    <>
        <div className="container-fluid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">

          <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <div className="container-fluid">
              <NavLink className="navbar-brand"exact to="/">React Web App</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" activeClassName="menu_active" exact to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" exact to="/service">Service</NavLink>
                  </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="menu_active" exact to="/about">About</NavLink>
                </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="menu_active" exact to="/contact">Contact</NavLink>
              </li>
                </ul>
              </div>
            </div>
          </nav>
        <hr className="b-border mt-0"/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
