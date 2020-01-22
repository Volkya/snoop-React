import React from 'react';
import './App.css';
import './components/Landing.css';

import Navegation from './components/Navegation';
import Header from "./components/Header";
import Slideshow from "./components/Slideshow";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navegation/>
        <Header/>
        <Slideshow/>
        <Footer/>
    </div>
  );
}

export default App;
