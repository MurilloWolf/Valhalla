import React from "react";

/*config FontAwesome */

import "./public/main.css";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Register from "./pages/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    /*Elemento que deve estar envolvendo toda a rota do site (Router) */
    /*Switch faz a decisão de qual pagina vai ser renderizado  */
    /*O Route path="" define a rota para chamar a pagina  */
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/Cadastrar">
            <Register />
          </Route>
          <Route path="/Feed">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
