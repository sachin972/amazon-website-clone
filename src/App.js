// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Header} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
