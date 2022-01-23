let {leerJSON,EscribirJSON,GuardarDatos,FiltrarEstado} =require("./funcionalidades");
let fs= require("fs")



let param = process.argv[2];


switch(param){

    case "listar": 
        let titulos = leerJSON();
        let tareas= titulos.forEach((t,p)=> console.log(t.titulo));
        console.log(tareas)
        break;    
    case "crear":
        

}

