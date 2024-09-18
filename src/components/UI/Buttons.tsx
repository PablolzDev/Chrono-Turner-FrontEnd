import React from "react";


type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};
const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button' }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;