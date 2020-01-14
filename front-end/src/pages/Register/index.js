import React from "react";

export default function Register() {
  return (
    <div className="registerWrapper">
      <div className="formRegister">
        <form>
          <input type="email" placeholder="Username" autoFocus required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
