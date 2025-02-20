import React from "react";
import "./button.css";

const Button = ({ text, variant = "primary", size, ...props }) => {
  return (
    <button className={`button ${variant}`} style={{ fontSize: size }} {...props}>
      {text}
    </button>
  );
};

export default Button;
