import React from "react";

type InputFieldProps = {
  label: string;
  type: string;
};
const InputField: React.FC<InputFieldProps> = ({label, type}) => (
  <label>
      <span>{label}</span>
      <input type="{type}"></input>
  </label>
);

export default InputField