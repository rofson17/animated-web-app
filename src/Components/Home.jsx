import React from 'react';
import "./css/Home.css";
import homeImg from "./Img/rocket.png"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home=()=>{
  return (
    <>
      <Common tittle="Welcome to Home page," imgSrc={homeImg} visit="/service" btnName="Get Started"/>
    </>
  );
}

export default Home;
