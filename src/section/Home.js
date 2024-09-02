import React from "react";
import "../style/Home.css";
// import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import About from "./About";
import Discover from "./Discover";
import "bootstrap-icons/font/bootstrap-icons.css";
function Home() {
  return (
    <>
      <div class="Bimage">
        <div class="text">
          <p>
            <b>Discover your place</b>
          </p>

          <h1>Explore The</h1>
          <h1>
            Best <b>Beautiful</b>
          </h1>

          <h1>
            <b>Beaches</b>
          </h1>
          <button>Explore</button>
        </div>
        <div className="Bsmall-image">
          <div id="places">
            <p>
              5 best places <br />
              to visit
            </p>
            <div class="more">
              <p>More</p>
              <ul class="bi bi-arrow-right-short" id="icon"></ul>
            </div>
          </div>
          <img src={home2} alt="home2" className="small-image"></img>
        </div>
      </div>

      <About />
      <Discover />
    </>
  );
}

export default Home;
