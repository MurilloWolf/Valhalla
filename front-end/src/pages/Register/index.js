import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoSmall from "../../public/imgs/logo-small.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEye,
  faEyeSlash,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import "./register.css";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="registerWrapper">
      <div className="formRegister">
        <form>
          <figure className={"logo"}>
            <img src={logoSmall} alt="logoValhalla" />
          </figure>
          <h3 className={"h3Cadastro"}>Crie sua conta</h3>
          <div className="icon-input">
            <FontAwesomeIcon icon={faUser} color="#db2b39" />
            <input type="text" placeholder="@Username" autoFocus required />
          </div>
          <div className="icon-input">
            <FontAwesomeIcon icon={faEnvelope} color="#db2b39" />
            <input type="email" placeholder="Email" required />
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

          <button>Cadastrar</button>

          <div className={"support-form"}>
            <hr />
            <Link className={"link"}>Esqueci minha senha </Link>
            <Link to="/" className={"link"}>
              Já sou cadastrado
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
