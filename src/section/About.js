import React from "react";
import "../style/About.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";

function About() {
  return (
    <div>
      <div class="About">
        <div class="information">
          <h1>
            More Information <br /> About The Best Beaches
          </h1>
          <p>
            You can find the most beautiful and pleasant places at th best{" "}
            <br />
            prices with special discounts, you choose the place we will guide{" "}
            <br />
            you all the way to wait, get your place now.
          </p>
          <button id="abtbtn">Reverse a place</button>
        </div>
        <div class="aboutimgs">
          <img src={about1} alt="about" id="img1"></img>
          <img src={about2} alt="about" id="img2"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
