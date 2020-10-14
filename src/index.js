import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ThemeContext from "./components/ThemeContext/themeContext";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeContext.Provider value={"isntLogged"}>
      <App />
    </ThemeContext.Provider> */}
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
