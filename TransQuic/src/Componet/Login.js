import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './login.css';

function Copyright() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ color: '#6c757d' }}>
        {'Copyright © '}
        <a href="TransquiC.com/" style={{ color: 'inherit', textDecoration: 'none' }}>
          TransquiC
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </p>
    </div>
  );
}

export default function SignInSide() {
  const { emailAuth, setEmailAuth } = useAuth(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/login/${email}`);
      const server_password = response.data.password;
      if (response.data.email !== email) {
        setEmailError(true);
        setPasswordError(true);
        setEmail('');
        setPassword('');
      } else {
        setEmailError(false);
        if (server_password === password) {
          setEmailAuth(email);
          navigate('/HomePage');
        } else {
          setPasswordError(true);
          setPassword('');
        }
      }
    } catch (error) {
      console.error("Error fetching the data", error);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: '#f7f7f7', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#f50057', padding: '10px', borderRadius: '50%' }}>
            <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.97 3.91 9 8.75 9.74.66.09.94-.28.94-.62 0-.3-.01-1.08-.02-2.13-3.22.68-3.9-1.38-3.9-1.38-.54-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.26 1.85 1.26 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.57-.29-5.27-1.29-5.27-5.73 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.19 1.18A11.05 11.05 0 0112 6.81c.99-.01 1.99.13 2.92.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.56.23 2.72.11 3.01.74.81 1.18 1.84 1.18 3.1 0 4.45-2.71 5.44-5.29 5.72.44.38.82 1.12.82 2.26 0 1.64-.02 2.96-.02 3.37 0 .34.28.72.95.6C18.1 21 22 16.97 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </div>
          <h2 style={{ margin: '20px 0 0' }}>Sign in</h2>
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              style={{
                width: '100%',
                padding: '10px',
                border: emailError ? '1px solid red' : '1px solid #ccc',
                backgroundColor: emailError ? 'rgba(255, 0, 0, 0.1)' : 'white',
                borderRadius: '4px',
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
            />
            {emailError && <p style={{ color: 'red', fontSize: '12px' }}>Invalid Email or Not Registered Email</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              style={{
                width: '100%',
                padding: '10px',
                border: passwordError ? '1px solid red' : '1px solid #ccc',
                backgroundColor: passwordError ? 'rgba(255, 0, 0, 0.1)' : 'white',
                borderRadius: '4px',
              }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
            />
            {passwordError && <p style={{ color: 'red', fontSize: '12px' }}>Invalid Password</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" style={{ marginLeft: '5px' }}>Remember me</label>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign In
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>Forgot password?</a>
            <a href="/SignUpPage" style={{ color: '#1976d2', textDecoration: 'none' }}>Don't have an account? Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
