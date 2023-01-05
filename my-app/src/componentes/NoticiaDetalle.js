import moment from "moment";
import 'moment/locale/es'; //Importar moment en español
import { useNavigate } from "react-router-dom";
import ContenidoFragmentado from "./ContenidoFragmentado";
const NoticiaDetalle = ({noticia})=>{
    const navigate = useNavigate();
    moment.locale('es')
    var lineas = noticia.info.split('\n');
    return (
        <>
            <div className="noticiaDetalle" key={noticia.idnoticia}>
                <img src="https://unsplash.it/1600/450" alt="" />
                <h1>{noticia.titulo}</h1>
                <h2 onClick={() => navigate(-1)} className={`searchTag ${noticia.categoria+"Tag"}`}>{noticia.categoria}</h2>
                <h2 className="fecha">{noticia.fechatexto}</h2>
                {lineas.map((linea,index)=>{
                    return <ContenidoFragmentado key={index} linea = {linea}/>
                })}

            </div>
            
        </>

    )

}

export default NoticiaDetalle