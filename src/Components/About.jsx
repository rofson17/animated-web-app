import React from 'react';
import "./css/Home.css";
import AboutImg from "./Img/computer.png"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About=()=>{
  return (
    <>
    <Common tittle="Welcome to about page," imgSrc={AboutImg} visit="/contact" btnName="Contact Now" />
    </>
  );
}

export default About ;
