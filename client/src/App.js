// import logo from './logo.svg';
// import './App.css';
import socketIO from 'socket.io-client';
import SignIn from './routes/SignIn';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SignUp from './routes/SignUp';
import { useState } from 'react';

const socket = socketIO.connect('http://localhost:8000');

function App() {

  const [user, setUser] = useState('');

  return (
    <div className="App">

      {/* <SignIn /> */}

      <Routes>
        <Route path='/' element={<SignIn user={user} setUser={setUser} />} />
        <Route path='/signin' element={<SignIn user={user} setUser={setUser} />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/signin' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} /> */}
      </Routes>

    </div>
  );
}

export default App;
