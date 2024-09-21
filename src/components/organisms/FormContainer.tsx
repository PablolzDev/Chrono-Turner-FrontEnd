import React, { useState } from 'react';
import axios from 'axios';
import { 
  Button, 
  ContainerLogo, 
  ErrorMessage, 
  ImageContainer, 
  Img, 
  Input, 
  Label, 
  LoginContainer, 
  LoginForm, 
  SigInOption, 
  Span, 
  Title 
} from '@/styles/styles';
import { ContainerPass } from '../../styles/styles';
import Link from 'next/link';

interface UserData {
  id?: string;
  name?: string;
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const baseUrl = 'http://localhost:3000'; // Asegúrate de que esta URL coincida con tu servidor json-server

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        // Login
        const response = await axios.get(`${baseUrl}/users?email=${userData.email}`);
        const user = response.data[0];
        if (user && user.password === userData.password) {
          console.log('Login successful:', user);
          localStorage.setItem('userId', user.id);
          // Aquí puedes redirigir al usuario o actualizar el estado de la aplicación
        } else {
          throw new Error('Invalid credentials');
        }
      } else {
        // Register
        const checkExisting = await axios.get(`${baseUrl}/users?email=${userData.email}`);
        if (checkExisting.data.length > 0) {
          throw new Error('Email already exists');
        }
        const response = await axios.post(`${baseUrl}/users`, userData);
        console.log('Registration successful:', response.data);
        // Aquí puedes autologuear al usuario o redirigirlo a la página de login
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(isLogin ? 'Login failed. Please check your credentials.' : 'Registration failed. Please try again.');
      }
      console.error('Auth error:', err);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
    setUserData({ name: '', email: '', password: '' });
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <ContainerLogo>
          <Img src='/utils/LogoName.png' alt="Logo" />
        </ContainerLogo>
        <Title>{isLogin ? 'Sign In' : 'Sign Up'}</Title>
        <Span>{isLogin ? 'Enter your credentials to access your account' : 'Create your account'}</Span>
        
        {!isLogin && (
          <>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </>
        )}

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />

        <ContainerPass>
          <Label>Password</Label>
          {isLogin && <Link href="/">Forgot your password?</Link>}
        </ContainerPass>
        <Input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</Button>
        <SigInOption>
          <Span>{isLogin ? "Don't have an account?" : "Already have an account?"}</Span>
          <Link href="#" onClick={toggleAuthMode}>{isLogin ? 'Sign up' : 'Sign in'}</Link>
        </SigInOption>
      </LoginForm>
      <ImageContainer>
        <Img src='/utils/9959434.png' alt="Decorative" />
      </ImageContainer> 
    </LoginContainer>
  );
};

export default AuthForm;