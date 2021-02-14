import React from 'react';
import Img from './Img/work2.png'
import "./css/Cards.css"


const Cards=(props)=>{
  return (<>

    <div className="col-md-4 mx-auto col-10 ">
      <div className="card service_card">
        <img src={props.imgSrc} className="card-img-top" alt="Card"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    </>
  );
}

export default Cards;
