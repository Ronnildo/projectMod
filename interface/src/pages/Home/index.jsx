import soccerIMG from "../../images/soccer.png";

import { Link } from "react-router-dom";

import "./home.css";

export const Home = () => {
  return (
    <div>
      <span className="barra"></span>

      <div className="butt">
        <Link className="" to="/login">
          <button className="logone">Login</button>
        </Link>
        <Link className="" to="/register">
          <button  className="logtwo">
            Cadastro
          </button>
        </Link>
      </div>

      <div className="images-img">
          <h1 className="texto1">
            AGENDA <br /> FUTEBOL
          </h1>
          <br />
          <p className="texto">
            PARA MANTER-SE SEMPRE ATUALIZADO DE TODOS OS JOGOS DE SEUS
            CAMPEONATOS
          </p>
          <img src={soccerIMG} alt="" />
        </div>


    </div>
  );
};
