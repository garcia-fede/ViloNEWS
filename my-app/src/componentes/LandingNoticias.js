import { useState,useEffect } from "react"
import Axios from "axios"
import Noticia from "./Noticia"

const LandingNoticias = () => {
    const [noticias,setNoticias] = useState([]) // TODAS LAS NOTICIAS YA QUE NO HAY FILTRO
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((respuesta)=>{
            setNoticias(respuesta.data.slice(Math.max(respuesta.data.length - 5))) //Mostrar las ultimas noticias
        })
    },[])    

    return (
        <>
            <main>
                <div className="noticiasList">
                {noticias.map(data=>{
                    return <Noticia  key={data.idnoticia} noticia = {data} />
                })}
                </div>
            </main>
        </>
    )
}


export default LandingNoticias