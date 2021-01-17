import React from 'react'
import '../css/Footer.css'

const Footers = () => {
    return (
        <div class="mb-0">
            <footer class="bd-footer p-3 p-md-5 mt-5 footer-color text-center text-sm-start">
                <div class="container">
                    <ul class="bd-footer-links ps-0 mb-3">
                    <li class="d-inline-block"><a href="#">Facebookaa</a></li>
                    <li class="d-inline-block ms-3"><a href="#">Twitter</a></li>
                    <li class="d-inline-block ms-3"><a href="#">Instagram</a></li>
                    <li class="d-inline-block ms-3"><a href="#">Cotizar Servicios</a></li>
                    <li class="d-inline-block ms-3"><a href="#">Promociones</a></li>
                    <li class="d-inline-block ms-3"><a href="#">Políticas</a></li>
                    </ul>
                    <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, 
                        qui illo esse aut, odit laudantium commodi provident voluptatibus praesentium 
                        explicabo nobis deleniti corrupti accusamus, deserunt excepturi cumque soluta 
                        dolore magni.</p>
                </div>
            </footer>
            <div className="p-3 container-fluid footer-cr">
                        <p class="mb-0">Copyright © 2020 JJ Cars - Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footers
