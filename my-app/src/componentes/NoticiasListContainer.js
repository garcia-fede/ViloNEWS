import NoticiaMediana from "./NoticiaMediana"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import Axios from "axios"

const NoticiasListContainer = () =>{
    const {categoria} = useParams()

    const [noticias,setNoticias] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((respuesta)=>{
            setNoticias(respuesta.data.filter(noticia=>noticia.categoria==categoria))
        })
    },[categoria])   

    return(
        <>
            <main>
                <div className="noticiasList">
                {noticias.map(noticia=>{
                    return <NoticiaMediana key={noticia.idnoticia} noticia = {noticia} />
                })}
                </div>
            </main>
        </>
    )
}

export default NoticiasListContainer