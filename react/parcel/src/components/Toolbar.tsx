import * as React from "react";

interface ToolbarProps {
  name: string;
}

const Toolbar = ({ name }: ToolbarProps) => (
  <div className="bg-black grid grid-cols-7 p-2">
    <h1 className="col-start-7 text-xl text-white text-center">Hello {name}</h1>
  </div>
);

export default Toolbar;
