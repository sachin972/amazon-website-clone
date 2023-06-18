// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("User is ", authUser);

      if(authUser)
      {
        dispatch({
          type: 'Set_User',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'Set_User',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path='/login' Component={Login} />

          <Route path='/'  Component={Home} />
            
          <Route path='/checkout' Component={Checkout} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
