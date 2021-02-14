import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';
import Footer from './Footer';

const Service=()=>{
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5"> Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                      Sdata.map((val, n)=>{
                        return <Cards key={n}
                            imgSrc={val.imgSrc}
                            title={val.title}
                            content={val.content}
                           />
                      })
                    }
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Service ;
