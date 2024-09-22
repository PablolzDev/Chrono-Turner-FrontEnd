import React from "react";

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string; // Añade esta línea
};

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className }) => (
  <button className={className} onClick={onClick} type={type}>
    {text}
  </button>
);

export default ButtonComponent;