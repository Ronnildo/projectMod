import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import axios from "axios";

export default class Register extends React.Component {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [name, setName] = useState("");

  state = {
    name: "",
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    //event.preventDefault();

    let url = "http://localhost:3333/users";

    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(data);
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        alert("Email já cadastrado!")
        console.log(err);
      });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
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
        <form onSubmit={this.handleSubmit} className="login-form">
          {/*classe para estilo do no login */}
          <span className="login-form-title">Cadastro</span>
          <br />
          <br />
          {/*div para as caixas de texto*/}
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="name"
              //className={name !== "" ? "has-val input" : "input"}
              type="name"
              //value={formValue.name}
              onChange={this.handleChangeName}
              //onChange={(e) => setName(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Nome"></span>
          </div>

          {/*div para as caixas de texto*/}
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="email"
              //className={email !== "" ? "has-val input" : "input"}
              type="email"
              //value={formValeu.email}
              onChange={this.handleChangeEmail}
              //onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="password"
              // className={password !== "" ? "has-val input" : "input"}
              type="password"
              //value={formValue.password}
              onChange={this.handleChangePassword}
              //onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Passaword"></span>
          </div>

          {/*div para o botão*/}
          <div className="container-login-form-btn">
            <button className="login-form-btn">Cadastrar</button>
          </div>

          {/*div (não possui conta?)*/}
          <div className="text">
            <span className="text1">Já possui conta?</span>
            <Link className="text2" to="/login">
              Login.
            </Link>
          </div>
        </form>
      </LayoutComponents>
    );
  }
}
