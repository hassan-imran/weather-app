// import logo from './logo.svg';
// import './App.css';
import socketIO from 'socket.io-client';
import SignIn from './routes/SignIn';
import { Routes, Route, Navigate, Link } from "react-router-dom";
import SignUp from './routes/SignUp';

const socket = socketIO.connect('http://localhost:8000');

function App() {

  return (
    <div className="App">

      {/* <SignIn /> */}

      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/signin' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} /> */}
      </Routes>

    </div>
  );
}

export default App;
