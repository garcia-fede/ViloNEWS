import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import Axios from "axios"
import moment from "moment";
import 'moment/locale/es'; //Importar moment en español
import NoticiaDetalle from "./NoticiaDetalle";

const NoticiaDetalleContainer = ()=>{
    moment.locale('es')
    const {idnoticia} = useParams()

    const [noticias,setNoticias] = useState([])
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((respuesta)=>{
            setNoticias(respuesta.data.filter(noticia=>noticia.idnoticia==idnoticia))
        })
    },[])    

    return(
        <>
            <div className="noticiasList">
                    {noticias.map(noticia=>{
                        return <NoticiaDetalle key={noticia.idnoticia} noticia = {noticia} />
                    })}
                    
            </div>
        </>
    )
}

export default NoticiaDetalleContainer