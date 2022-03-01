import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        {/*classe para estilo do no login */}
        <span className="login-form-title">login</span>
        <br />
        <br />
        {/*div para as caixas de texto*/}
        <div className="wrap-input">
          {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          {/*se o valor for diferente de vazil vou adicionar has-val, se estiver vazil permaneça com o input*/}
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Passaword"></span>
        </div>

        {/*div para o botão*/}
        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

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
};