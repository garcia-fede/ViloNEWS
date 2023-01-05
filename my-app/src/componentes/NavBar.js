import {Link} from "react-router-dom"
import LOGO from "../imagenes/LOGO.png"
import twitter from "../imagenes/twitter.png"
import instagram from "../imagenes/instagram.png"
import linkedin from "../imagenes/linkedin.png"
import email from "../imagenes/email.png"


const NavBar = () => {
    let hamburger = true;
    const items = document.getElementsByClassName("item")
    window.addEventListener("resize",()=>{
        if(window.innerWidth>950){
            for(const item of items)
            {
                item.style.display='block'
            }
            document.getElementById("hamburger").checked=false
            hamburger = true;
        }
        else{
            for(const item of items)
            {
                item.style.display='none'
            }
        }
    })

    const toggleHamburger = ()=>{
        if(hamburger){
            for(const item of items)
            {
                item.style.display='block'
                hamburger=!hamburger
            }
        }
        else{
            for(const item of items)
            {
                item.style.display='none'
                hamburger=!hamburger
            }
        }
    }

    return(
        <>
            <div className="topLine">
                <ul>
                    <li>Fecha</li>
                    <li>Contacto</li>
                    <li>FAQ</li>
                    <div className="redes">
                        <li><img className="icon" src={twitter} alt="twitterIcon" /></li>
                        <li><img className="icon" src={instagram} alt="instagramIcon" /></li>
                        <li><img className="icon" src={linkedin} alt="linkedinIcon" /></li>
                        <li><img className="icon" src={email} alt="emailIcon" /></li>
                    </div>
                </ul>
            </div>
            <ul className="navBar">
                <input type="checkbox" name="" id="hamburger" onClick={toggleHamburger} />
                <div><Link to="/"><img src={LOGO} alt="logo" id="LOGO"/></Link></div>
                <li className="item"><Link to="/">Inicio</Link></li>
                <li className="item"><Link to="Categoria/Politica">Politica</Link></li>
                <li className="item"><Link to="Categoria/Deportes">Deportes</Link></li>
                <li className="item"><Link to="Categoria/Sociedad">Sociedad</Link></li>
                <li className="item"><Link to="Categoria/Cultura">Cultura</Link></li>
                <li className="item"><Link to="Categoria/MedioAmbiente">Medio ambiente</Link></li>
                {/* <li className="item"><Link to="Login/">Log in</Link></li> */}
                <li className="item"><Link to="NoticiaNueva/">Post</Link></li>
            </ul>
        </>
    )
}

export default NavBar 