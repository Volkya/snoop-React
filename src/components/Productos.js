import React from "react";
import Thumb from './cappuccino.jpg';

function Productos() {
    return <section className="text-center carusel" id="productos">
        <h1 className="text-left text-white mb-3">Nullam sed urna justo.</h1>
        <div className="multiple-items slider">
            <div>
                <img src={Thumb} className="img-thumbnail" alt=""/>
                <h3 className="bg-light rounded">Prueba</h3>
            </div>
        </div>
    </section>
}

export default Productos;
