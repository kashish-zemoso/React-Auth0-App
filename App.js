import React from 'react'
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserProfile from './components/UserProfile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <>
       <LoginButton />
       <LogoutButton />
       <UserProfile />
    </>
  );
}

export default App;
