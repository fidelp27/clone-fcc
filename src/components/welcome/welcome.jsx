import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container-welcome">
      <div className="saludos-welcome">
        Bienvenidos al curso de React de <b>FreeCodeCamp</b>
      </div>
      <iframe
        width="650"
        height="350"
        src="https://www.youtube.com/embed/6Jfk8ic3KVk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Welcome;
