import React from "react";
import Testimonios from "./testimonios";
import "./testimonios.css";

const TestimoniosList = ({ info }) => {
  return React.Children.toArray(
    info.map((tes) => {
      return (
        <div className="items">
          <Testimonios comentarios={tes} />
        </div>
      );
    })
  );
};

export default TestimoniosList;
