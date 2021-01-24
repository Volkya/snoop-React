import React from 'react';
import './App.css';
import Navegation from './components/Navegation';
import Somos from "./components/Somos";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
        <Navegation/>
        <Somos/>
        {/* <Productos/>
        <Contacto/> */}
    </div>
  );
}

export default App;
