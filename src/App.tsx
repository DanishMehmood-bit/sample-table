import "./App.scss";
import React from "react";
import { Table } from "@bentley/ui-components";
import { DataProvider } from "./DataProvider";

const App: React.FC = () => {

  return (
    <div className="viewer-container">
      <Table
        dataProvider={new DataProvider()}
      />
    </div>
  );
};

export default App;
