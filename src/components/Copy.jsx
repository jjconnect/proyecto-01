import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {withRouter} from 'react-router'

const Navbar = (props) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Proyecto 01</a>

                        <div class="navbar-nav me-auto mb-2 mb-lg-0">

                            <nav class="nav-link active" aria-current="page" href="#">Home</nav>

 
                            <nav class="nav-link" href="#">Link</nav>
 

                            <nav class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</nav>

                        </div>

                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar)

/*
<footer class="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start">
                <div class="container">
                    <ul class="bd-footer-links ps-0 mb-3">
                    <li class="d-inline-block"><a href="https://github.com/twbs">GitHub</a></li>
                    <li class="d-inline-block ms-3"><a href="https://twitter.com/getbootstrap">Twitter</a></li>
                    <li class="d-inline-block ms-3"><a href="/docs/5.0/examples/">Examples</a></li>
                    <li class="d-inline-block ms-3"><a href="/docs/5.0/about/overview/">About</a></li>
                    </ul>
                    <p class="mb-0">Designed and built with all the love in the world by the <a href="/docs/5.0/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>
                    <p class="mb-0">Currently v5.0.0-beta1. Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</p>
                </div>
            </footer>
*/