import { useState,useEffect } from "react"
import Axios from "axios"
import NoticiaPequeña from "./NoticiaPequeña"
import { Link } from "react-router-dom"

const LandingNoticias = () => {
    const [noticias,setNoticias] = useState([]) // TODAS LAS NOTICIAS YA QUE NO HAY FILTRO
    
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get").then((respuesta)=>{
            // setNoticias(respuesta.data.slice(Math.max(respuesta.data.length - 4))) //Almacenar las ultimas noticias
            setNoticias(respuesta.data)
        })
    },[])    

    return (
        <>
            <main>
                <div className="landingContainer">
                <svg id="Ola1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#00cba9" fillOpacity={1} d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,85.3C840,85,960,139,1080,181.3C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <svg id="Ola2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#000b76" fillOpacity={1} d="M0,288L60,272C120,256,240,224,360,229.3C480,235,600,277,720,277.3C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <svg id="Ola3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#772C7F" fillOpacity={1} d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,240C672,256,768,256,864,224C960,192,1056,128,1152,138.7C1248,149,1344,235,1392,277.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                    <div className="ultimaNoticiaContainer">
                        <img src="https://unsplash.it/800/450" alt="" />
                        {noticias.slice(Math.max(noticias.length - 1)).map(noticia=>{
                            return <div key={noticia.idnoticia}><Link to={`/Noticia/${noticia.idnoticia}`}><h2 style={{ fontSize: 30 }}>{noticia.titulo}</h2></Link><Link to={`Categoria/${noticia.categoria}`}><h3 className={`searchTag ${noticia.categoria+"Tag"}`}>{noticia.categoria}</h3></Link></div>                           
                        })}
                    </div>
                    <div className="otrasNoticiasContainer">
                        {noticias.slice(noticias.length-5,noticias.length-1).map(noticia=>{
                            return <NoticiaPequeña key={noticia.idnoticia} noticia = {noticia} />
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}


export default LandingNoticias