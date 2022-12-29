import {Link} from "react-router-dom"

const Noticia = ({noticia}) =>{
    const ruta = "/Noticia/"+noticia.idnoticia
    console.log(noticia)
    return (
        <>
            <div className="noticiaContainer">
                <h2>{noticia.idnoticia}</h2>
                <h2>{noticia.categoria}</h2>
                <Link to={ruta}>+Info</Link>
            </div>
        </>
    )
}

export default Noticia