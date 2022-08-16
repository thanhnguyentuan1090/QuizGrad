import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="Home__container">
        <div className="Home__img"></div>
        <div className="text">
            <div className="text1">
              <div className="MiniText1">Learn</div>
              <div className="MiniText2">New concepts</div>
              <div className="MiniText3">for each question</div>
            </div>
            <div className="text2">
              | we help you prepare for exam and Quizes{" "}
            </div>
            <div className="StartBtn">
            <Link className="navLink" to="/playing"><div className="Start"> <div>Start solving</div> </div></Link>
            <div className="Know"><div>Know more</div></div>
          </div>
          </div>
      </div>
      {/* <img src={logo} className="logoimg" /> */}
    </div>
  );
}
