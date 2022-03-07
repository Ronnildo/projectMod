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
      <ul>
        {this.state.jogos.map((jogo) => (
          <li>{jogo.casa}</li>
        ))}
      </ul>
    );
  }
}
