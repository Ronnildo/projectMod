import soccerIMG from "../../images/soccer.png";

import "./home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="containers"></div>
      <div className="images">    
        <span className="images-img">
          <img src={soccerIMG} alt="" />
        </span>
      </div>
    </div>
  );
};
