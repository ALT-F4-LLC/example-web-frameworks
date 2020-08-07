import * as React from "react";
import Dashboard from "./Dashboard";

interface ToolbarProps {
  name: string;
}

const Toolbar = ({ name }: ToolbarProps) => (
  <div className="bg-black grid grid-cols-7 p-2">
    <h1 className="col-start-7 text-xl text-white text-center">Hello {name}</h1>
  </div>
);

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
