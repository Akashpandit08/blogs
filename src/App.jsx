import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const appwriteUrl = import.meta.env.VITE_APP_APPWRITE_URL;

  console.log(import.meta.env.VITE_APP_APPWRITE_URL);


  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>Appwrite URL: {appwriteUrl}</p>
      </header>
    </div>
  );
}

export default App;
