import { FaFutbol } from "react-icons/fa";
//import { FaPen } from "react-icons/fa";
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
    data: "",
    horario: "",
    local: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault()

    let url = "http://localhost:3333/jogos";

    const data = {
      casa: this.state.casa,
      fora: this.state.fora,
      data: this.state.data,
      horario: this.state.horario,
      local: this.state.local,
    };

    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
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
            <input type="text" onChange={this.handleChangeCasa} name="" id="casa" placeholder="casa" />
          </div>
          <div className="time2">
            <input type="text" onChange={this.handleChangeFora} name="" id="fora" placeholder="fora" />
          </div>

          <div className="container-card">
            <div className="txt">
              <br />

              <div className="caixa1">
                <input type="text" onChange={this.handleChangeData} name="" id="data" placeholder="Data" />
                
              </div>
              <br />

              <div className="caixa2">
                <input type="text" onChange={this.handleChangeHorario} name="" id="horario" placeholder="Horário" />
                
              </div>
              <br />

              <div className="caixa3">
                <input type="text" onChange={this.handleChangeLocal} name="" id="local" placeholder="Local" />
               
              </div>

              <button className="cancel">Cancelar</button>
              <Link to="/rodada">
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
