import Noticia from "./Noticia"
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
                <h1>{categoria}</h1>
                <div className="noticiasList">
                {noticias.map(data=>{
                    return <Noticia  key={data.idnoticia} noticia = {data} />
                })}
                </div>
            </main>
        </>
    )
}

export default NoticiasListContainer