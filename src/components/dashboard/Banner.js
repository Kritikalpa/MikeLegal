import React from "react";
import trophy from "../../assets/trophy.png";
import "../../styles/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <img src={trophy} alt="" />
      <div className="banner-text">
        <div>Congratulation Jennie,</div>
        <div>
          You've completed the profile verification. It's very easy to convert
          your points to cash now.
        </div>
      </div>
      <div className="banner-stat">
        <div>95</div>
        <div>Points</div>
        <div>Explore</div>
      </div>
    </div>
  );
}

export default Banner;
