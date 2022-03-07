import { FaFutbol } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";

import "./style.css";

export default class Rodada extends React.Component {
  
  state = {
    jogos: []
  }

  get(){
    const url = "http://localhost:3333/jogos";

    axios.get(url)
    .then((res) => {
      const jogos = res.data;
      this.setState({jogos});
      console.log(jogos)
    }).catch((err) => {
      console.log(err);
    })
  }
  
  render() {
    return (
      <div>
        <span className="spa"></span>

        <Link className="" to="/jogo">
          <button className="logcad">Cadastrar</button>
        </Link>

        <div className="container">
          <FaFutbol className="fut"></FaFutbol>
          <FaFutbol className="fut2"></FaFutbol>
          <p>X</p>
          <div className="time1">
            
          </div>
          <div className="time2">
            <input type="text" name="" id="caixaa" placeholder="fora" />
          </div>

          <div className="container-card">
            <div className="txt">
              <br />

              <div className="caixa1">
                <input type="text" name="" id="caixa" placeholder="Horário" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>
              <br />

              <div className="caixa2">
                <input type="text" name="" id="caixa" placeholder="Local" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>
              <br />

              <div className="caixa3">
                <input type="text" name="" id="caixa" placeholder="Data" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>

              <button className="del">Deletar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
