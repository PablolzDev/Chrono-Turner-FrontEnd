import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    background: #ededed;
  }

  input,
  button {
    border: none;
    outline: none;
    background: none;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const LoginForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  background-image: url('/utils/img-login.jpeg');
  background-size: cover;
  background-position: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
`;