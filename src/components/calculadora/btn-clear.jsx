import React from "react";
import "./calculadora.css";

const BtnClear = (props) => {
  return (
    <div className="btn-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};
export default BtnClear;
