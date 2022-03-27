import React from "react";
import "./testimonios.css";

const Testimonios = ({ comentarios }) => {
  const { nombre, pais, img, cargo, empresa, testimonio } = comentarios;
  return (
    <div className="container--testimonios">
      <img src={img} alt={nombre} />
      <div className="info-testimonios">
        <p className="name">
          <strong> {nombre}</strong> en {pais}{" "}
        </p>
        <p className="cargo">
          {cargo} en <strong> {empresa}</strong>{" "}
        </p>
        <p className="testimonio">{testimonio} </p>
      </div>
    </div>
  );
};

export default Testimonios;
