import { FaFutbol } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { NavLink } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";
import React from "react";
import axios from "axios";

export default class Jogo extends React.Component {

  state = {
    casa: "",
    fora: "",
    horario: "",
    local: "",
    data: "",
  };

  handleSubmit = async (event) => {

    let url = "http://localhost:3333/users";

    const data = {
      casa: this.state.casa,
      fora: this.state.fora,
      horario: this.state.horario,
      local: this.state.local,
      data: this.state.data
    };

    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Email já cadastrado!");
        console.log(err);
      });
  }

  handleChangeCasa = (event) => {
    this.setState({ casa: event.target.value });
  };
  handleChangeFora = (event) => {
    this.setState({ fora: event.target.value });
  };
  handleChangeHorario = (event) => {
    this.setState({ horario: event.target.value });
  };
  handleChangeLocal = (event) => {
    this.setState({ local: event.target.value });
  };
  handleChangeData = (event) => {
    this.setState({ data: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="">
        <span className="spa"></span>

        <Link className="" to="/home">
          <button className="loghome">Home</button>
        </Link>

        <div className="container">
          <FaFutbol className="fut"></FaFutbol>
          <FaFutbol className="fut2"></FaFutbol>
          <p>X</p>
          <div className="time1">
            <input type="text" name="" id="casa" placeholder="casa" />
          </div>
          <div className="time2">
            <input type="text" name="" id="fora" placeholder="fora" />
          </div>

          <div className="container-card">
            <div className="txt">
              <br />

              <div className="caixa1">
                <input type="text" name="" id="horario" placeholder="Horário" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>
              <br />

              <div className="caixa2">
                <input type="text" name="" id="local" placeholder="Local" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>
              <br />

              <div className="caixa3">
                <input type="text" name="" id="data" placeholder="Data" />
                <button className="penn">
                  <FaPen className="pen"></FaPen>
                </button>
              </div>

              <button className="cancel">Cancelar</button>
              <Link to="/cadast">
                <button className="ok">Ok</button>
              </Link>
            </div>
          </div>

          <span></span>
        </div>
      </form>
    );
  }
}
