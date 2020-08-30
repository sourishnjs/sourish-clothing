import React from "react";
import "./Homepage.styles.scss";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-items">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-items">
            <div className="content">
              <h1 className="title">JAKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-items">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-items">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
