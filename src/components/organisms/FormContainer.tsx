// import { Button, ContainerLogo, ErrorMessage, ImageContainer, Img, Input, Label, LoginContainer, LoginForm, SigInOption, Span, Title } from '@/styles/styles';
// import React, { useState } from 'react';
// import { ContainerPass} from '../../styles/styles';
// import Image from 'next/image';
// import Logo from '/utils/LogoName.png';
// import Link from 'next/link';
// interface LoginData {
//   email: string;
//   password: string;
// }


// const Login: React.FC = () => {
//   const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
//   const [error, setError] = useState<string | null>(null);

//   const url = 'http://localhost:3000/users'
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       console.log('Login successful:', data);
//       // Here you would handle successful login (e.g., store token, redirect)
//     } catch (err) {
//       setError('Login failed. Please check your credentials and try again.');
//       console.error('Login error:', err);
//     }
//   };

//   return (
//     <>
//       <LoginContainer>
        
//         <LoginForm onSubmit={handleSubmit}>
//         <ContainerLogo>
//         <Img src='/utils/LogoName.png'></Img>
//         {/* <Image src={Logo} alt='{sadsa}'></Image> */}
//         </ContainerLogo>
//           <Title>Sign In</Title>
//           <Span>Enter your username and password to access your account</Span>
//           <Label>Username</Label>
//           <Input
//             type="email"
//             name="email"
//             value={loginData.email}
//             onChange={handleChange}
//             required
//           />
//           <ContainerPass>
//             <Label>Password</Label>
//               <Link href="/">Forgot your password?</Link>
//           </ContainerPass>
//           <Input
//             type="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleChange}
//             required
//           />
//           {error && <ErrorMessage>{error}</ErrorMessage>}
          
//           <Button type="submit">Sign In</Button>
//           <SigInOption>
//           <Span>Dont have an account?</Span>
//             <Link href="/register"> Sign up</Link>
//           </SigInOption>
//         </LoginForm>
//         <ImageContainer>
//           <Img src='/utils/9959434.png'></Img>
//         </ImageContainer> 
//     </LoginContainer>
//     </>

//   );
// };

// export default Login;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Link from 'next/link';
// // import { 
// //   Button, 
// //   ContainerLogo, 
// //   ErrorMessage, 
// //   ImageContainer, 
// //   Img, 
// //   Input, 
// //   Label, 
// //   LoginContainer, 
// //   LoginForm, 
// //   SigInOption, 
// //   Span, 
// //   Title,
// //   ContainerPass
// // } from '@/styles/styles';

// // interface UserData {
// //   name?: string;
// //   email: string;
// //   password: string;
// // }

// // interface Props {
// //   isRegister: boolean;
// // }

// // const AuthForm: React.FC<Props> = ({ isRegister }) => {
// //   const [userData, setUserData] = useState<UserData>({ name: '', email: '', password: '' });
// //   const [error, setError] = useState<string | null>(null);

// //   const baseUrl = 'http://localhost:3000';

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setUserData(prevState => ({ ...prevState, [name]: value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     setError(null);

// //     try {
// //       let response;
// //       if (isRegister) {
// //         response = await axios.post(`${baseUrl}/register`, userData);
// //         console.log('Registration successful:', response.data);
// //         // Handle successful registration (e.g., show success message, redirect to login)
// //       } else {
// //         response = await axios.post(`${baseUrl}/login`, {
// //           email: userData.email,
// //           password: userData.password
// //         });
// //         console.log('Login successful:', response.data);
// //         // Handle successful login (e.g., store token, update app state, redirect)
// //       }
      
// //       // Here you can handle the successful response
// //       // For example, storing the token, updating app state, redirecting, etc.
// //     } catch (err) {
// //       if (axios.isAxiosError(err) && err.response) {
// //         // The request was made and the server responded with a status code
// //         // that falls out of the range of 2xx
// //         setError(err.response.data.message || `${isRegister ? 'Registration' : 'Login'} failed.`);
// //       } else {
// //         // Something happened in setting up the request that triggered an Error
// //         setError(`${isRegister ? 'Registration' : 'Login'} failed. Please try again.`);
// //       }
// //       console.error(`${isRegister ? 'Registration' : 'Login'} error:`, err);
// //     }
// //   };

// //   return (
// //     <LoginContainer>
// //       <LoginForm onSubmit={handleSubmit}>
// //         <ContainerLogo>
// //           <Img src='/utils/LogoName.png' alt="Logo" />
// //         </ContainerLogo>
// //         <Title>{isRegister ? 'Sign Up' : 'Sign In'}</Title>
// //         <Span>
// //           {isRegister
// //             ? 'Create your account to get started'
// //             : 'Enter your username and password to access your account'}
// //         </Span>
// //         {isRegister && (
// //           <>
// //             <Label>Name</Label>
// //             <Input
// //               type="text"
// //               name="name"
// //               value={userData.name}
// //               onChange={handleChange}
// //               required
// //             />
// //           </>
// //         )}
// //         <Label>Username</Label>
// //         <Input
// //           type="email"
// //           name="email"
// //           value={userData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <ContainerPass>
// //           <Label>Password</Label>
// //           {!isRegister && <Link href="/">Forgot your password?</Link>}
// //         </ContainerPass>
// //         <Input
// //           type="password"
// //           name="password"
// //           value={userData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         {error && <ErrorMessage>{error}</ErrorMessage>}
// //         <Button type="submit">{isRegister ? 'Sign Up' : 'Sign In'}</Button>
// //         <SigInOption>
// //           <Span>{isRegister ? 'Already have an account?' : 'Dont have an account?'}</Span>
// //           <Link href={isRegister ? '/login' : '/register'}>
// //             {isRegister ? 'Sign In' : 'Sign Up'}
// //           </Link>
// //         </SigInOption>
// //       </LoginForm>
// //       <ImageContainer>
// //         <Img src='/utils/9959434.png' alt="Decorative" />
// //       </ImageContainer>
// //     </LoginContainer>
// //   );
// // };

// // export default AuthForm;


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