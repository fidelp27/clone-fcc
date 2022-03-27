import React from "react";
import "./boton.css";

const Boton = ({ nombre, botonClick, action, num }) => {
  return (
    <button
      className={botonClick ? "boton-click" : "boton-reiniciar"}
      onClick={action}
      disabled={nombre === "Restar" && num === 0}
    >
      {nombre}
    </button>
  );
};

export default Boton;
