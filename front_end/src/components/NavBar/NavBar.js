import React from 'react'
import './style.css'
import Img from '../img/IonicLogo.png'
import{TiSocialFacebookCircular} from "react-icons/ti"
import Youtube from '../img/youtube.png'
import Facebook from '../img/facebook.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'




function NavBar(){
return(

//---------Social Media-----------//
<div className='geral'>
   
   
   
    <div className= "socialbar">
       <a href="https://www.youtube.com/channel/UCtR3U-Qmb1h2GE9w0Fe3NrA" target="_blank" className="link-9">            
       <img className='youtube' src={Youtube}></img> </a>

       <a href="hhttps://www.linkedin.com/company/ness-health/?originalSubdomain=br" target="_blank" className="link-9">            
       <img className='youtube' src={Linkedin}></img> </a>

       <a href="https://web.facebook.com/ness.health/?_rdc=1&_rdr" target="_blank" className="link-9">            
       <img className='youtube' src={Facebook}></img> </a>           

       <a href="https://www.instagram.com/ionic.health/" target="_blank" className="link-9">            
       <img className='youtube' src={Instagram}></img> </a>

    </div>



    <nav>

        <div className="nav-wrapper navbarBackground" >
                <a href="!" className="brand-logo">
                        <img src={Img}></img>
                </a>

        </div>
    </nav>
</div>
)
}

export default NavBar