import * as React from "react";
import * as ReactDOM from "react-dom";

import Mount from "./Mount";
import "./styles.css";

if (module.hot) {
  module.hot.accept();
}

const mountNode = document.getElementById("mount");

ReactDOM.render(<Mount name="Jane" />, mountNode);
