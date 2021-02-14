import React from 'react';
import Form from './Form';
import webImg from './Img/internet.png';
import Footer from './Footer';
const Contact=()=>{

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Contact Us</h1>
          <div className="container contact-div">
              <div className="row">
                  <Form />
                  <div className="col-md-6 col-10 mx-auto order-1 order-lg-2">
                    <img src={webImg} alt="contact image" className="img-fluid"/>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
