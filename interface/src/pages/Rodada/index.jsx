import { FaFutbol } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

import "./style.css";

export default class Rodada extends React.Component {
  state = {
    jogos: [],
  };

  get() {
    const url = "http://localhost:3333/jogos";

    axios
      .get(url)
      .then((res) => {
        const jogos = res.data;
        this.setState({ jogos });
        console.log(jogos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="barra">
        <span className="barra">
          <Link className="" to="/jogo">
            <button className="cadjogo">Cadastrar</button>
          </Link>
        </span>

          <div className="times">
            <p id="casa">Casa</p>
            <p>X</p>
            <p id="fora">Fora</p>
          </div>

        <form action="" className="containerss">         
          <div className="icones">
            <FaFutbol className="fut"></FaFutbol>
            <FaFutbol className="fut2"></FaFutbol>
          </div>

          <div className="formulario">
            <p id="horario">
              Horáio
              <button className="pen"><FaPen></FaPen></button>
            </p><br />
            <p id="local">
              Local
            <button className="pen2"><FaPen></FaPen></button>
            </p><br />
            <p id="data">
              Data
            <button className="pen3"><FaPen></FaPen></button>
            </p><br />
                        
             <button className="caddel">Deletar</button>
          </div>
          
        </form>
      </div>
    );
  }
}
