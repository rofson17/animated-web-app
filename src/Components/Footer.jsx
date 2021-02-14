import React from 'react';

const Footer=()=>{
  let d = new Date();
  return (<>
      <footer className="big-light text-center">
      <p>&copy; {d.getFullYear()} React Web App</p>


      </footer>

    </>
  )
}

export default Footer;
