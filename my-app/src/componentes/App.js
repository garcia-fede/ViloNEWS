import {BrowserRouter,Routes,Route} from "react-router-dom"
import '../componentes/styles.css'
import Editor from "./Editor"
import NoticiaNueva from "./NoticiaNueva"
import NavBar from './NavBar'
import LandingNoticias from './LandingNoticias'
import Sesion from './Sesion'
import NoticiasListContainer from './NoticiasListContainer'
import NoticiaDetalleContainer from './NoticiaDetalleContainer'

const App = () => {
    return (
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingNoticias />} />
                <Route path="Categoria/:categoria" element={<NoticiasListContainer />} />
                <Route path="Noticia/:idnoticia" element={<NoticiaDetalleContainer />} />
                <Route path="Login" element={<Sesion />}/>
                {/* <Route path="NoticiaNueva" element={<NoticiaNueva />}/> */}
                <Route path="NoticiaNueva" element={<Editor />}/>
            </Routes>   
        </BrowserRouter>
    </>
    )
}

export default App