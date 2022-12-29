import {Link} from "react-router-dom"

const NavBar = () => {
    return(
        <>
            <ul className="navSize">
                <li><Link to="/">Home</Link></li>
                <li><Link to="Categoria/Deportes">Deportes</Link></li>
                <li><Link to="Categoria/Politica">Politica</Link></li>
                <li><Link to="Categoria/Cultura">Cultura</Link></li>
                <li><Link to="Categoria/Sociedad">Sociedad</Link></li>
                <li><Link to="Login/">Log in</Link></li>
                <li><Link to="NoticiaNueva/">Post</Link></li>
            </ul>
        </>
    )
}

export default NavBar 