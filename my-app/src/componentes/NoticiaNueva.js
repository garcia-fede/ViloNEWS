import { useState,useEffect } from "react"
import Axios from 'axios'
import moment from "moment";
import 'moment/locale/es'; //Importar moment en español

const NoticiaNueva = ()=>{
    moment.locale('es')
    const [titulo,setTitulo] = useState("")
    const [info,setInfo] = useState("")
    const [categoria,setCategoria] = useState("")

    const enviarNoticia = ()=>{
        let fecha = moment().format("LL")
        let fechaformato = moment().format()
        if(categoria!=""){
            Axios.post("http://localhost:3001/api/insert",{
                titulo: titulo, 
                info: info, 
                categoria: categoria,
                fechatexto: fecha,
                fechaformato: fechaformato
            }).then(()=>{
                alert("Noticia almacenada en la base de datos")
            }).catch(()=>{
                console.log("Hubo un error al almacenar la noticia")
            })
        }
        else{
            alert("Seleccione una categoria")
        }
    }
    return(
        <>
            <div className="form">
                <input 
                placeholder="Titulo de la noticia..."
                autoComplete="off"
                type="text" 
                name="Titulo"
                onChange={(e)=>{
                    setTitulo(e.target.value)
                }}/>
                <textarea 
                placeholder="Inserte texto aqui..."
                autoComplete="off"
                type="text"
                name="Informacion"
                onChange={(e)=>{
                    setInfo(e.target.value)
                }} />
                <label>Categoria</label>
                <select 
                name="Categoria"
                id=""
                onChange={(e)=>{
                        setCategoria(e.target.value)
                }}>
                    <option value="" ></option>
                    <option value="Politica">Politica</option>
                    <option value="Deportes">Deportes</option>
                    <option value="Sociedad">Sociedad</option>
                    <option value="Cultura">Cultura</option>
                    <option value="MedioAmbiente">Medio ambiente</option>
                </select>
                <button onClick={enviarNoticia}>Enviar</button>
            </div>
        </>
    )
}

export default NoticiaNueva