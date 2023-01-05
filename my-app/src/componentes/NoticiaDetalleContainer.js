import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import Axios from "axios"
import moment from "moment";
import 'moment/locale/es'; //Importar moment en español

const NoticiaDetalleContainer = ()=>{
    moment.locale('es')
    const {idnoticia} = useParams()

    const [noticias,setNoticias] = useState([]) // TODAS LAS NOTICIAS YA QUE NO HAY FILTRO
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((respuesta)=>{
            setNoticias(respuesta.data.filter(noticia=>noticia.idnoticia==idnoticia))
        })
    },[])    

    return(
        <>
            <div className="noticiasList">
                    {noticias.map(noticia=><div className="noticiaDetalle" key={noticia.idnoticia}><h1>{noticia.titulo}</h1><h2>{noticia.fechatexto}</h2><p>{noticia.info}</p><h2>{noticia.categoria}</h2></div>)}
            </div>
        </>
    )
}

export default NoticiaDetalleContainer