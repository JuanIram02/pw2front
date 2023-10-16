import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import './App.css';
import './App.css';

function App() {
  return (
    <>
      <Router>{/* We create the routes were going to have in our application and asign what we want to show in that route*/}
        <Routes>
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<RegisterPage/>} />
          <Route exact path='/' element={<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;