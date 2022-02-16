import React from "react";
import banner from "../assets/bitmap.png";
import classes from "./Banner.module.scss";


const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        height: "300px",
      }}
    >
      <div className={classes.bannerContent}>
        <h2>The Joke Bible</h2>
        <p>Daily Laughs for you and yours</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default Banner;
