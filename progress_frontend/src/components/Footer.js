import React from 'react';
import "../styles/footer.css"
// import logo from "../pages/assets/logo2.svg";

const ThreeColumnLayout = () => {
  return (
    <div className='footer_'>
    <div className="container_footer">
      <div className="column">
        <h4 className='heading_footer'>Our Mission</h4>
        <hr></hr>
        <p className='footer-items'>Our mission is to provide a platform that enriches the teaching experience of academic counselors and teachers by providing them with a tool that helps them track their students' progress.
        </p>
        <div className='logo_wrapper'>
          {/* <img src={logo}></img> */}
        </div>
      </div>
      <div className="column">
        <h4 className='heading_footer'>Our Social Media Links</h4>
        <hr></hr>
        <p>
        <ul>
            <li><a href="https://c20.amma.org/edt-wg/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://c20.amma.org/ged-wg/" target="_blank" rel="noreferrer">Our Website</a></li>
            <li><a href="https://c20.amma.org/ihh-wg/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://c20.amma.org/sustainable-and-resilient-communities/" target="_blank" rel="noreferrer">FaceBook</a></li>
        </ul>
        </p>
      </div>
      <div className="column">
        <h4 className='heading_footer'>
            Other Links
        </h4>
        <hr></hr>
        <p className='footer-items'>
            <ul>
                <li><a href="https://c20.amma.org/news/" target="_blank" rel="noreferrer">News</a></li>
                <li><a href="https://c20.amma.org/events/" target="_blank" rel="noreferrer">Events</a></li>
            </ul>
        </p>
      </div>
      
    </div>

    </div>
  );
};

export default ThreeColumnLayout;