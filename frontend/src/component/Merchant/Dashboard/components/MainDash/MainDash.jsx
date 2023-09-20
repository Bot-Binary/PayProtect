import React from "react";
import Cards from "../Cards/Cards";
import SimpleTable from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Hello, {"Jay"}</h1>
      <Cards />

      <SimpleTable /> 
    </div>
  );
};

export default MainDash;
