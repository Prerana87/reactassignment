import React from "react";
import img1 from "../images/discover4.jpg";
import img2 from "../images/discover1.jpg";
import img3 from "../images/discover2.jpg";
import "../style/Discover.css";

function Discover() {
  return (
    <div class="discover">
      <div>
        <h2>
          Discover The Most
          <br /> Attractive Places
        </h2>
        <div class="images">
          <img src={img1} alt="img" id="Dimg1"></img>

          <img src={img2} alt="img" id="Dimg2"></img>
          <img src={img3} alt="img" id="Dimg3"></img>
        </div>
      </div>
    </div>
  );
}

export default Discover;
