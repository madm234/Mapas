import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-box" id="about">
        <img src="Images/space.png" id="spaceimg" />
        <div className="about-head">
          <b style={{ color: "#3e3b3b" }}>About</b>
        </div>
        
        <div className="abtPartition">
          <div className="abtGIF">
              <img src="./Images/guider.gif" alt="" />
          </div>
          <div className="sickoMode">
            <b style={{ color: "#4c4c4c" }} className="about-desc">
              Mapas is all about helping one to find their class or building in DIT
              University. A clear overview is provided through building models and
              3D models of respective classes of the building. UI is kept pretty
              basic and simple as user has to just enter the class name or code in
              the search box which automatically redirect the user to it's
              respective result. <span style={{color: 'red'}}>Vishwakarma building is currently not available in the given project.</span><br />
              This is currently in it's testing and developing phase where only certain 3D models of classes are available right now. However it is an
              open project for all the developers who wanna contribute.
            </b>
            <div className="contiBtnBox">
              <button className="btnContibute">Contribute</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
