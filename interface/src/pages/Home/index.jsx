import soccerIMG from "../../images/soccer.png";

import { Link } from "react-router-dom";

import "./home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="containers"></div>
      <div className="images">
        <Link className="" to="/login">
          <button to="/login" className="log">
            Login
          </button>
        </Link>
        <Link className="" to="/register">
          <button to="/login" className="logtwo">
            Cadastro
          </button>
        </Link>
        <span className="images-img">
          <h1>
            AGENDA <br /> FUTEBOL
          </h1>
          <br />
          <p>
            PARA MANTER-SE SEMPRE ATUALIZADO DE TODOS OS JOGOS DE SEUS
            CAMPEONATOS
          </p>
          <img src={soccerIMG} alt="" />
        </span>
      </div>
    </div>
  );
};
