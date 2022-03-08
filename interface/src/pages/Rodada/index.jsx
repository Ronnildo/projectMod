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
        if(err.response){
          console.log(err.response.data);
          window.alert("Email/senha incorretos")
        }
        console.log(err.res);
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
          <p>X</p>

          <div id="time1">Casa</div>
          
          <div id="time2">Fora</div>
        </div>

        <form action="" className="containerss">
          <div className="icones">
            <FaFutbol className="fut"></FaFutbol>
            <FaFutbol className="fut2"></FaFutbol>
          </div>

          <div className="formulario">
            <div id="horario">
              Horário
              <button className="pen"><FaPen></FaPen></button>
            </div>
            <br />
            
            <div id="local">
              Local
              <button className="pen2"><FaPen></FaPen></button>
            </div>
            <br />

            <div id="data">
              Data
              <button className="pen3"><FaPen></FaPen></button>
            </div>
            <br />

            <button className="caddel">Deletar</button>
          </div>
        </form>
      </div>
    );
  }
}
