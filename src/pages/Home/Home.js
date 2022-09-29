import React from "react";
import { Link } from "react-router-dom";
import landingPage from "../../images/LandingPage.svg";
import birthdayCap from "../../images/birthdayCap.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <h1 className="title">
          Imagine if<span className="snapchat">Snapchat</span> had events.
        </h1>
        <p className="subTitle">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div>
        <img className="landingPage" src={landingPage} alt=""></img>
        <Link>
          {/* <img className="createEvent" src={birthdayCap} alt=""></img> */}
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
