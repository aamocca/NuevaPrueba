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
        let paramT = process.argv[3];
        let objeto ={
            titulo: paramT,
            estado: "PENDIENTE"
        }
        GuardarDatos(objeto);
        break;
    case "filtrar":
        let paramF = process.argv[3]
        FiltrarEstado(paramF);
        break;    
    case undefined:
        console.log("Ingresa algo");
        break;
    default:
        console.log("No se que quieres hacer")

}

