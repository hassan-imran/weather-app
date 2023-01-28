// import logo from './logo.svg';
// import './App.css';
import socketIO from 'socket.io-client';
import SignIn from './routes/SignIn';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SignUp from './routes/SignUp';
import Dashboard from './routes/Dashboard';
import { useEffect, useState } from 'react';

const socketId = socketIO.connect('http://localhost:8000');

function App() {

  const [user, setUser] = useState('');
  const [socket, setSocket] = useState('');
  const [userWeather, setUserWeather] = useState({});

  useEffect(()=>{
    setSocket(socketId.id);
  },[socket]);

  return (
    <div className="App">

      {/* <SignIn /> */}

      {user ? (<>
        <Routes>
          <Route path='/' element={<Dashboard user={user} setUser={setUser} userWeather={userWeather} setUserWeather={setUserWeather} socket={socket} setSocket={setSocket} />} />
          {/* <Route path='/signin' element={<SignIn user={user} setUser={setUser} />} /> */}
          {/* <Route path='/signup' element={<SignUp />} /> */}
          <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} userWeather={userWeather} setUserWeather={setUserWeather} socket={socket} setSocket={setSocket} />} />
        </Routes>
      </>) : (<>
        <Routes>
          <Route path='/' element={<SignIn user={user} setUser={setUser} userWeather={userWeather} setUserWeather={setUserWeather} socket={socket} setSocket={setSocket} />} />
          <Route path='/signin' element={<SignIn user={user} setUser={setUser} userWeather={userWeather} setUserWeather={setUserWeather} socket={socket} setSocket={setSocket} />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} />} /> */}
        </Routes>
      </>)}

    </div>
  );
}

export default App;
