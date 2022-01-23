const fs= require("fs");


function leerJSON(){

    let JSONSchule = JSON.parse(fs.readFileSync("./tareas.json","utf-8"));  
    return JSONSchule;
}


function EscribirJSON(tareasNuevas){
    fs.writeFileSync("./tareas.json",JSON.stringify(tareasNuevas,null,2));
}

function GuardarDatos(objeto){
    let arreglo= leerJSON();
    arreglo.push(objeto);
    return EscribirJSON(arreglo);
}

function FiltrarEstado(estado){
    let arreglo= leerJSON();
    let tareas= arreglo.filter((t,p)=> console.log(t.titulo));
    return tareas;
}


module.exports={leerJSON,EscribirJSON,GuardarDatos,FiltrarEstado}