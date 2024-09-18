
import { useState } from 'react';

export const useFormToggle = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return { isSignUp, toggleForm };
};
