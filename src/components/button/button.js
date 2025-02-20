import React from "react";
import "./button.css"; // Importa o arquivo CSS

const Button = ({ text, variant = "primary", ...props }) => {
  return (
    <button className={`button ${variant}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
