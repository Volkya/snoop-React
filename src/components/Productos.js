import React from "react";

function Productos() {
    return <section className="text-center carusel" id="productos">
        <h1 className="text-left text-white mb-3">Nullam sed urna justo.</h1>
       <div className="container">

<div className="card">
    <div className="card-body">
        <img src={process.env.PUBLIC_URL +  '/img/cappucino.jpg' }/>
        <h2>Hola</h2>

        ᴍᴀᴛᴛ ᴅ'ᴄᴏʀʀᴇᴀ
    </div>
</div>

       </div>
    </section>
}

// <h3 className="bg-light rounded">Prueba</h3>
// <div className="multiple-items slider">
//     <div>
//     <img src={Thumb} className="img-thumbnail" alt=""/>
//
//     <h3 className="bg-light rounded">Prueba</h3>
// </div>
// </div>


export default Productos;
