const fs= require("fs");


function leerJSON(){

    let JSONSchule = JSON.parse(fs.readFileSync("./tareas.json","utf-8"));  
    return JSONSchule;
}


function EscribirJSON(){

}

function GuardarDatos(){

}

function FiltrarEstado(){
    
}
