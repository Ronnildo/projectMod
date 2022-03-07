import { Link } from "react-router-dom";
//import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSingIn = async (e) => {
    e.preventDefault();

    let url = "http://localhost:3333/login";

    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <LayoutComponents>
        <form onSubmit={this.handleSingIn} className="login-form">
          {/*classe para estilo do no login */}
          <span className="login-form-title">login</span>
          <br />
          <br />
          {/*div para as caixas de texto*/}
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="email"
              //className={email !== "" ? "has-val input" : "input"}
              type="email"
              //value={"email"}
              onChange={this.handleChangeEmail}
              placeholder="Email"
            />
          </div>
          <br />
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="password"
              //className={password !== "" ? "has-val input" : "input"}
              type="password"
              //value={"password"}
              onChange={this.handleChangePassword}
              placeholder="Senha"
            />
          </div>
          <br />
          {/*div para o botão*/}
          <Link to="/jogo">
            <button className="login-form-btn">Login</button>
          </Link>
          <br />
          {/*div (não possui conta?)*/}
          <div className="text">
            <span className="text1">Não possui conta?</span>

            <Link className="text2" to="/register">
              Criar conta.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    );
  }
}
