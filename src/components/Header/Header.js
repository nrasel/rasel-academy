import React from 'react'
import './Header.css'
import media from '../../images/social-media.png'
import man1 from '../../images/man (1).png'
import { Link } from 'react-router-dom'

function componentName() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#"><img style={{width:'50px'}} src={media} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link icon-style ms-3 active" aria-current="page" href="#"><i class="fas fa-home"></i></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link icon-style ms-3" href="#"><i class="fas fa-fire"></i></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link icon-style ms-3" href="#"><i class="far fa-bell"></i></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link icon-style ms-3" href="#"><i class="fab fa-telegram-plane"></i></a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link man-style ms-3" href="#"> <img style={{width:'35px'}} src={man1} alt="" /> <span>Rasel</span></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default componentName
