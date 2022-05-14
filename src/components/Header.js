import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <div id="loader-wrapper">
        <div id="loader"></div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>

    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <i class="fas fa-film mr-2"></i>
                OMS
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link nav-link-1" aria-current="page"><Link to ='/'>Home</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-3" ><Link to ='/about'>About</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-4" ><Link to ='/contact'>Contact</Link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-2" ><Link to ='/signin'>Login</Link></a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header