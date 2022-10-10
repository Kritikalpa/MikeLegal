import React from "react";
import trophy from "./assets/trophy.png";

function Banner() {
  return (
    <div className="banner">
      <img src={trophy} alt="" />
      <div>
        <div>Congratulation Jennie,</div>
        <div>
          You've completed the profile verification. It's very easy to convert
          your points to cash now.
        </div>
      </div>
      <div>
        <div>95</div>
        <div>Points</div>
        <div>Explore</div>
      </div>
    </div>
  );
}

export default Banner;
