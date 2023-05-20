// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
// import Home from './Components/Home/Home.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Selection from './Components/Selection/Selection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path='/home' component={Home} /> */}
          <Route path='/' Component={Header} />
          <Route path='/selection' Component={Selection} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
