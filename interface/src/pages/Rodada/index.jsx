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

  componentDidMount() {
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

  handleDelete = (event) => {
    event.preventDefault();

    const url = "http://localhost:3333/jogos";

    axios
      .delete(url + `${this.state.jogos.map((jogo) => jogo.id)}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

          <div id="time1">{this.state.jogos.map((jogo) => jogo.casa)}</div>

          <div id="time2">{this.state.jogos.map((jogo) => jogo.fora)}</div>
        </div>

        <form action="" className="containerss">
          <div className="icones">
            <FaFutbol className="fut"></FaFutbol>
            <FaFutbol className="fut2"></FaFutbol>
          </div>

          <div className="formulario">
            <div id="horario">
              {this.state.jogos.map((jogo) => jogo.data)}
              <button className="pen">
                <FaPen></FaPen>
              </button>
            </div>
            <br />

            <div id="local">
              {this.state.jogos.map((jogo) => jogo.horario)}
              <button className="pen2">
                <FaPen></FaPen>
              </button>
            </div>
            <br />

            <div id="data">
              {this.state.jogos.map((jogo) => jogo.local)}
              <button className="pen3">
                <FaPen></FaPen>
              </button>
            </div>
            <br />
            <div>
                <button onSubmit={this.handleDelete} 
                className="caddel">Deletar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
