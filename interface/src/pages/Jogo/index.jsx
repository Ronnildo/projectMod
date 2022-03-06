import { FaFutbol } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

export const Jogo = () => {
  return (
    <div className="container">
      <FaFutbol className="fut"></FaFutbol>
      <FaFutbol className="fut2"></FaFutbol>

      <div className="container-card">
        <div className="txt">
          <br />
      
          <input type="text" name="" id="caixa" placeholder="Horário" />    <button className="penn">
            <FaPen className="pen"></FaPen>
          </button>
          <br />
          <br />
          <input type="text" name="" id="caixa" placeholder="Local" />
          <br />
          <br />
          <input type="text" name="" id="caixa" placeholder="Data" />
          <br />
          <button className="del">Deletar</button>
        </div>
      </div>
    </div>
  );
};
