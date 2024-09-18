import React from 'react';
import SignInForm from '../molecules/SignInForm';
import SignUpForm from '../molecules/SignUpForm';
import { useFormToggle } from '../../hooks/useFormToggle';  // Importa correctamente
import styles from '@styles/form.module.css'

const FormContainer: React.FC = () => {
  const { isSignUp, toggleForm } = useFormToggle();  // Usa la función correctamente

  return (
    <div className={`${styles.cont} ${isSignUp ? styles.signup : ''}`}>
      <div className={styles.subCont}>
        <div className={styles.img}>
          <div className={isSignUp ? styles.mIn : styles.mUp}>
            <h2>{isSignUp ? 'One of us?' : 'New here?'}</h2>
            <p>
              {isSignUp
                ? 'If you already have an account, just sign in. We’ve missed you!'
                : 'Sign up and discover great new opportunities!'}
            </p>
          </div>
          <div className={styles.imgBtn} onClick={toggleForm}>
            <span>{isSignUp ? 'Sign In' : 'Sign Up'}</span>
          </div>
        </div>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};

export default FormContainer;
