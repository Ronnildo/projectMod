import soccerIMG from "../../images/soccer.png";

import "./home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="containers"></div>
      <div className="images">  
      <button className="log">Login</button>  
        <span className="images-img">
          <h1>AGENDA <br /> FUTEBOL</h1><br />
          <p>PARA MANTER-SE SEMPRE ATUALIZADO DE TODOS OS JOGOS DE SEUS CAMPEONATOS</p>
          <img src={soccerIMG} alt="" />
        </span>
      </div>
    </div>
  );
};
