import React from "react";
import { informacion } from "../info/info";
import TestimoniosList from "./testimoniosList";

const TestimoniosListContainer = () => {
  const info = informacion;
  console.log(info);

  return (
    <>
      <h1
        style={{
          width: "40%",
          fontSize: "2rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
      </h1>
      <TestimoniosList info={info} />
    </>
  );
};

export default TestimoniosListContainer;
