import React from "react";
import Title from "@components/UI/Title";
import InputField from "../UI/InputField";
import Button from "../UI/Buttons";

const SignInForm: React.FC = () => (
  <div className="form">
    <Title text="Welcome" />
    <InputField label="Email" type="email"/>
    <InputField label="Password" type="password"/>
    <Button text="Sign In"/>
  </div>
);

export default SignInForm;

