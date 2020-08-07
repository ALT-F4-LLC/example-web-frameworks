import * as React from "react";

interface Props {
  name: string;
  setName: (value: string) => void;
}

const Dashboard = ({ name, setName }: Props) => {
  return (
    <div className="flex items-center justify-center text-blue-200">
      <div className="grid">
        <h1 className="text-lg pb-2">Welcome {name} to the dashboard!</h1>
        <button onClick={() => setName("Chat")}>Change Name</button>
      </div>
    </div>
  );
};

export default Dashboard;
