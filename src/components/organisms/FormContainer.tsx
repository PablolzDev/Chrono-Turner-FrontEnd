import { Button, ContainerLogo, ErrorMessage, ImageContainer, Img, Input, Label, LoginContainer, LoginForm, SigInOption, Span, Title } from '@/styles/styles';
import React, { useState } from 'react';
import { ContainerPass} from '../../styles/styles';

interface LoginData {
  email: string;
  password: string;
}


const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const url = 'http://localhost:3000/users'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Here you would handle successful login (e.g., store token, redirect)
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <>
      <LoginContainer>
        
        <LoginForm onSubmit={handleSubmit}>
        <ContainerLogo>
        <Img src='/utils/Logo.png'></Img>
        </ContainerLogo>
          <Title>Sign In</Title>
          <Span>Enter your username and password to access your account</Span>
          <Label>Username</Label>
          <Input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <ContainerPass>
            <Label>Password</Label>
              <a href="">Forgot your password?</a>
          </ContainerPass>
          <Input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Button type="submit">Sign In</Button>
          <SigInOption>
            <p>Already have an account?<a href="">Sign in</a></p>
          </SigInOption>
        </LoginForm>
        <ImageContainer>
          <Img src='/utils/img-login-removebg-preview.png'></Img>
        </ImageContainer> 
    </LoginContainer>
    </>

  );
};

export default Login;