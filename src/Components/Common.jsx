import React from 'react';
import "./css/Home.css";
import AboutImg from "./Img/computer.png"
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
  return (
    <>
      <section id="header" className="mt-5 m">
        <div className="container-fluid ">
          <div className="row ">
              <div className="col-10 mx-auto">
                <div className="row mb-5 mb-md-0">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                    <h1>
                  {props.tittle} <strong className="brand-name">Hello</strong>
                    </h1>
                    <h2 className="my-3">Awesome web app using React JS
                    </h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                    </div>
                  </div>
                  <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 ">
                      <img className="img-fluid animated" src={props.imgSrc} alt="home png" />
                  </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Common ;
