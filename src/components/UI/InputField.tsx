import React from "react";

type InputFieldProps = {
  label: string;
  type: string;
};
const InputField: React.FC<InputFieldProps> = ({label, type}) => (
  <label id="label">
      <span id="span">{label}</span>
      <input type="{type}" id="input"></input>
  </label>
);

export default InputField