import parse from 'html-react-parser'; //Permite pasar javascript string a texto html

const ContenidoFragmentado = ({linea}) =>{
    // var hashtagCount = 0
    // var palabrasReemplazar = []
    // var indexAux=0;
    // var cierreAsterisco = 0
    // for(var i=0;i<linea.length;i++){
    //     if(linea[i]==="#"){
    //         hashtagCount++;
    //     }
    // }
    // for(var i=0;i<linea.length;i++){
    //     if(linea[i]==="*"&&cierreAsterisco==0){
    //         cierreAsterisco=1;
    //         palabrasReemplazar[indexAux]=""
    //     }
    //     else if(cierreAsterisco==1&&linea[i]!="*"){
    //         palabrasReemplazar[indexAux]+=linea[i];
    //     }
    //     else if(cierreAsterisco==1&&linea[i]==="*"){
    //         cierreAsterisco=0;
    //         indexAux++;
    //     }
    // }
    // palabrasReemplazar.map(palabra=>{
    //     linea = linea.replace(palabra,'<b>' + palabra + '</b>')
    //     linea = linea.replace(/\*/g,"") //Remueve todos los asteriscos
    // })

    // if(hashtagCount==1){
    //     return (
    //         <>
    //             <h2>{linea.replace(/#/g,"")}</h2> 
    //         </>
    //     )
    // }
    // else if(hashtagCount==2){
    //     return (
    //         <>
    //             <h3>{linea.replace(/#/g,"")}</h3>
    //         </>
    //     )
    // }
    // else{
        return (
            <>
                {parse(linea)}
            </>
        )
    // }
    
}

export default ContenidoFragmentado