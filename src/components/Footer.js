import React from "react";
import Foot from './adventure.jpg';

function Footer() {
    return <section id="#footer">
        <div className="row">
            <div className="col-md-6 imgfigure">
                <img src={Foot} alt=""/>
            </div>
            <div className="col-md-6 px-2 textcont">

                <b>Titulo de ejemplo</b>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        </div>
    </section>
}

export default Footer;

