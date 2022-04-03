import React, { useState } from "react";
import Boton from "../boton/boton";
import "./contador.css";

const Contador = () => {
  const [numero, setNumero] = useState(
    JSON.parse(localStorage.getItem("numero"))
  );

  const sumNum = () => {
    setNumero(numero + 1);
  };

  const subsNum = () => {
    setNumero(numero - 1);
  };

  const restartCounter = () => {
    setNumero(0);
    localStorage.clear();
  };
  localStorage.setItem("numero", JSON.stringify(numero));

  return (
    <div className="boxContainer">
      <div className="numBox">
        <p>{numero !== null ? localStorage.getItem("numero") : 0} </p>
      </div>
      <div className="btnBox">
        <Boton
          nombre={"Sumar"}
          botonClick={true}
          action={sumNum}
          num={numero}
        />
        <Boton
          nombre={"Restar"}
          botonClick={true}
          action={subsNum}
          num={numero}
        />
        <Boton
          nombre={"Reiniciar"}
          botonClick={false}
          action={restartCounter}
        />
      </div>
    </div>
  );
};

export default Contador;
