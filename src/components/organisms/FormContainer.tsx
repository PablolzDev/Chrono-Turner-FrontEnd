"use client"

import React from 'react';
import SignInForm from '../molecules/SignInForm';
import SignUpForm from '../molecules/SignUpForm';
import styles from '@styles/form.module.css'
import useFormToggle from '../../hooks/useFormToggle';
const FormContainer: React.FC = () => {
  const { isSignUp, toggleForm } = useFormToggle(); 

  return (
    <div className={`${styles.cont} ${isSignUp ? styles.signup : ''}`}>
      <div className={styles.subCont}>
        <div className={styles.img}>
          <div className={isSignUp ? styles.mIn : styles.mUp}>
            <h2 id='h2'>{isSignUp ? 'One of us?' : 'New here?'}</h2>
            <p id='p'>
              {isSignUp
                ? 'If you already have an account, just sign in. We’ve missed you!'
                : 'Sign up and discover great new opportunities!'}
            </p>
          </div>
          <div className={styles.imgBtn} onClick={toggleForm}>
            <span id=''>{isSignUp ? 'Sign In' : 'Sign Up'}</span>
          </div>
        </div>
        {isSignUp ? <SignUpForm /> : <SignInForm />}
      </div>
    </div>
  );
};

export default FormContainer;
