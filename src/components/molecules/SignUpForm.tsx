import React from 'react';
import InputField from "../UI/InputField";

import Title from '../UI/Title';
import Button from '../UI/Buttons';

const SignUpForm: React.FC = () => (
  <div className="form">
    <Title text="Time to feel like home," />
    <InputField label="Name" type="text" />
    <InputField label="Email" type="email" />
    <InputField label="Password" type="password" />
    <Button text="Sign Up" />
    <Button text="Join with Facebook" />
  </div>
);

export default SignUpForm;
