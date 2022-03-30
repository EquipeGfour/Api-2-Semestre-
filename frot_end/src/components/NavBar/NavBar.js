import React from 'react'
import './style.css'
import Img from '../img/IonicLogo.png'
import{TiSocialFacebookCircular} from "react-icons/ti"





function NavBar(){
return(
    <nav>
        <div className= "socialbar">
            
        </div>
        <div className="nav-wrapper navbarBackground" >
                <a href="!" className="brand-logo">
                        <img src={Img}></img>
                </a>

        </div>
    </nav>
)
}

export default NavBar