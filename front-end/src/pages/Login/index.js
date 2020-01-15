import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./login.css";
import logo from "../../public/imgs/logo1.png";
import logoSmall from "../../public/imgs/logo-small.png";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"wrapper"}>
      <main className={"container"}>
        <aside className={"aside-left"}>
          <section className={"valhalla-section"}>
            <div className={"logo"}>
              <img src={logo} alt="logoValhalla" />
              <h1>Bem vindo a VALHALLA</h1>
            </div>
            <p>
              Bem vindo a VALHALLA, uma plataforma para todos os amantes
              contadores de histórias, onde seus usuários podem criar e
              compartilhar seus personagens. <br />
              1 - Basta adicionar uma foto com a arte do personagem
              <br />
              2 - Adicionar sua classe
              <br />
              3 - Contar a sua historia.
              <br />
            </p>
            {/*             <FontAwesomeIcon icon={faCalendar} size="5x" color="red" />
             */}{" "}
          </section>
        </aside>
        <aside className={"aside-right"}>
          <form className={"login-form"}>
            <figure className={"logoMobile"}>
              <img src={logoSmall} alt="logoValhalla" />
            </figure>
            <div className="icon-input">
              <FontAwesomeIcon icon={faUser} color="#db2b39" />
              <input type="email" placeholder="Email" autoFocus required />
            </div>
            <div className="icon-input">
              <label htmlFor="show-password">
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} color="#db2b39" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} color="#db2b39" />
                )}
              </label>

              <input
                type="checkbox"
                id="show-password"
                onChange={e => {
                  setShowPassword(!showPassword);
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password-field"
                placeholder="Senha"
                required
                autoComplete="on"
              />
            </div>
            <button>Login</button>

            <div className={"support-form"}>
              <hr />
              <Link to="" className="link">
                Esqueci minha senha{" "}
              </Link>
              <Link to="/Cadastrar" className="link">
                Ainda não sou cadastrado
              </Link>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
}
