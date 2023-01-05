import {Link} from "react-router-dom"
import moment from "moment";
import 'moment/locale/es'; //Importar moment en español

const NoticiaMediana = ({noticia}) =>{
    moment.locale('es')
    const ruta = "/Noticia/"+noticia.idnoticia
    return (
        <>
            <div className="noticiaMediana">
                <Link to={ruta}><img src="https://via.placeholder.com/200" alt="" /></Link>
                <div className="previewNoticia">
                    <h2 className={`searchTag ${noticia.categoria+"Tag"}`}>{noticia.categoria}</h2>
                    <Link to={ruta}><h2 className="tituloMediano">{noticia.titulo}</h2></Link>
                    <h3 className="fecha">{moment(noticia.fechaformato).fromNow()}</h3>
                    <p className="info">{noticia.info}</p>
                    <Link to={ruta}><button>Seguir leyendo &#62;</button></Link>
                </div>
            </div>
        </>
    )
}

export default NoticiaMediana