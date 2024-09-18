"use client";
import { useState } from 'react';

const useFormToggle = (initialState = false) => {
  const [isSignUp, setIsSignUp] = useState(initialState);

  const toggleForm = () => {
    setIsSignUp(prev => !prev);
  };

  return { isSignUp, toggleForm };
};


export default useFormToggle;