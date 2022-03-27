import React, { useState } from "react";
import BtnCalculadora from "./btn-calculadora";
import BtnClear from "./btn-clear";
import "./calculadora.css";
import Pantalla from "./pantalla";
import { evaluate } from "mathjs";
import Swal from "sweetalert2";

const Calculadora = () => {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const total = () => {
    if (input !== "") {
      setInput(evaluate(input));
    } else {
      Swal.fire(
        "No hay operaciones a ejecutar",
        "Por favor, ingresa una operación",
        "warning"
      );
    }
  };

  return (
    <div className="calculadora-container">
      <Pantalla input={input} />
      <div className="row-btn">
        <BtnCalculadora manejarClick={addInput}>7</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>8</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>9</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>*</BtnCalculadora>
      </div>
      <div className="row-btn">
        <BtnCalculadora manejarClick={addInput}>4</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>5</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>6</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>-</BtnCalculadora>
      </div>
      <div className="row-btn">
        <BtnCalculadora manejarClick={addInput}>1</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>2</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>3</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>+</BtnCalculadora>
      </div>
      <div className="row-btn">
        <BtnCalculadora manejarClick={total}>=</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>0</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>.</BtnCalculadora>
        <BtnCalculadora manejarClick={addInput}>/</BtnCalculadora>
      </div>
      <div className="row-btn">
        <BtnClear manejarClear={() => setInput("")}>CLEAR</BtnClear>
      </div>
    </div>
  );
};
export default Calculadora;
