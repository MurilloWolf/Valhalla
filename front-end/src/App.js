import React from "react";

/*FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./public/main.css";
import Login from "./pages/Login";

library.add(fab);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
