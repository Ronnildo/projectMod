import React from "react";
import { Link } from "react-router-dom";
//import { useState } from "react";
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
    try {
      const res = await axios
        .post(url, data)
        .then((res) => {
          console.log(res.status);
          alert("Usuário cadastrado!");
          //console.log(res.data);
        })
        .catch((err) => {
          alert("Email já cadastrado!");
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
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
          {/*div para as caixas de texto*/}
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="name"
              type="name"
              onChange={this.handleChangeName}
              placeholder="Nome"
            />
          </div>
          <br />
          {/*div para as caixas de texto*/}
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="email"
              type="email"
              onChange={this.handleChangeEmail}
              placeholder="Email"
            />
          </div>
          <br />
          <div className="wrap-input">
            {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
            <input
              id="password"
              type="password"
              onChange={this.handleChangePassword}
              placeholder="Senha"
            />
          </div>
          <br />
          {/*div para o botão*/}
          <Link className="" onClick={this.handleSubmit} to="/jogo">
            <button className="login-form-btn">Cadastrar</button>
          </Link>

          <br />
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
