import React from "react";
import Navbar from "../Components/Navbar.jsx";
import "./ContactPage.css"

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="eclipse one"></div>
      <div className="eclipse two"></div>
      <div className="eclipse three"></div>
        <div className="contact-page-container">
           <h1 className="title-contact-page"> Contact page </h1>
        </div>
        <div className="container-thats-wrapping-container">
          <div className="contacting-container">
                <div className="left-container-contact-page">
                  <h2>Lorem ipsum dolor sit amet,</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                  <div className="first-last-name-container">
                    <input type="text" name="" id="" placeholder="Lorem ipsum dolor sit" />
                    <input type="text" placeholder="Lorem ipsum dolor sit" />
                  </div>  
                  <input type="email" placeholder="Lorem ipsum dolor sit" />

                  <input type="textbox" placeholder="Lorem ipsum dolor sit"/>
                  <button>Send</button>
                </div>
                <div className="right-container-contact-page">
          </div>
        </div>
        </div>

    </div>
  );
}
