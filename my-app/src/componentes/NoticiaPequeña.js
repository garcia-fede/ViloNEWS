import {Link} from "react-router-dom"

const NoticiaPequeña = ({noticia}) =>{
    const ruta = "/Noticia/"+noticia.idnoticia
    return (
        <>
            <div className="noticiaPequeña">
                <Link to={ruta}><img src="https://unsplash.it/100/100" alt="" /></Link>
                <div className="previewNoticia">
                    <Link to={`Categoria/${noticia.categoria}`}><h2 className={`searchTag ${noticia.categoria+"Tag"}`}>{noticia.categoria}</h2></Link>
                    <Link to={ruta}><h2>{noticia.titulo}</h2></Link>
                </div>
            </div>
        </>
    )
}

export default NoticiaPequeña
