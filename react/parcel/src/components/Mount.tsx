import * as React from "react";
import Dashboard from "./Dashboard";
import Toolbar from "./Toolbar";

const Mount = () => {
  const [name, setName] = React.useState("Jane");

  return (
    <div className="grid h-screen" id="main">
      <Toolbar name={name} />
      <Dashboard name={name} setName={setName} />
    </div>
  );
};

export default Mount;
