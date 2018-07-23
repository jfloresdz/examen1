'use strict';

imprimirListaEntrenadores();

let botonRegistrar = document.querySelector('#btnRegistrar');

let botonBuscar = document.querySelector('#btnBuscar');

botonBuscar.addEventListener('click', filtrarDatos);

botonRegistrar.addEventListener('click', obtenerDatos);


let inputNumero = document.querySelector('#inputNumero');
let inputNombre = document.querySelector('#inputNombre');
let inputEdad = document.querySelector('#inputEdad');
let inputSexo = document.querySelector('#inputSexo');
let inputFoto = document.querySelector('#inputFoto');
let inputBuscar = document.querySelector('#inputBuscar');

function obtenerDatos(){
    let infoEntrenador =[];
    let bError = false;
    let respuesta=null;

    infoEntrenador.push(
        inputNumero.value,
        inputNombre.value,
        inputEdad.value,
        inputSexo.value,
        inputFoto.value   
    );
    
    bError = validar();
    if(bError != null){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el entrenador',
            text: bError,
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el entrenador');
    }else{
        respuesta=registrarEntrenador(infoEntrenador);
        if(respuesta.success==true){
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: respuesta.msg,
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
        imprimirListaEntrenadores();
        }else{
            swal({
                type : 'warning',
                title : 'Registro fallido',
                text: "No se pudo registar entranador, Numero ya se encuentra tomado",
                confirmButtonText : 'Entendido'
            });
        }
    }
    
};

function imprimirListaEntrenadores(){
    let listaEntrenadores = obtenerListaEntrenadores();
    let tbody = document.querySelector('#tbEntrenadores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cEdad = fila.insertCell();
        let cSexo = fila.insertCell();
        let cFoto = fila.insertCell();
        cNumero.innerHTML = listaEntrenadores[i]['Numero'];
        cNombre.innerHTML = listaEntrenadores[i]['Nombre'];
        cEdad.innerHTML = listaEntrenadores[i]['Edad'];
        cSexo.innerHTML = listaEntrenadores[i]['Sexo'];
        cFoto.innerHTML = '<img src="'+listaEntrenadores[i]['Foto']+ '">';
        
        }
    
};


function filtrarDatos(){
    if(inputBuscar.value!=null || inputBuscar.value!=""){
    let listaEntrenadores = filtrarEntrenadores("2",inputBuscar.value);
    let tbody = document.querySelector('#tbEntrenadores tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaEntrenadores.length; i++){
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cEdad = fila.insertCell();
        let cSexo = fila.insertCell();
        let cFoto = fila.insertCell();
        cNumero.innerHTML = listaEntrenadores[i]['Numero'];
        cNombre.innerHTML = listaEntrenadores[i]['Nombre'];
        cEdad.innerHTML = listaEntrenadores[i]['Edad'];
        cSexo.innerHTML = listaEntrenadores[i]['Sexo'];
        cFoto.innerHTML = '<img src="'+listaEntrenadores[i]['Foto']+ '">';
        
    }
    }else{
        imprimirListaEntrenadores();
    }
};


function validar(){
    let bError = null;
    
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

     //Validación de la edad
     if(inputNumero.value == '' || (regexSoloNumeros.test(inputNumero.value) == false) || Number(inputNumero.value) < Number(inputNumero.min)  || Number(inputNumero.value) > Number(inputNumero.max)){
        inputNumero.style.border="1px solid #FF0000";
        bError = "El campo Numero solo acepta numeros -";
    }else{
        inputNumero.style.border="0px solid #FF0000";
    }

    //Validación del nombre
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.style.border="1px solid #FF0000";
        if(bError==null){
            bError="";
        }
        bError = bError+"El campo Nombre solo recibe letras -";
    }else{
        inputNombre.style.border="0px solid #FF0000";
    }

    //Validación de sexo
    if(inputFoto.value == ''){
        if(bError==null){
            bError="";
        }
        bError = bError+"Por favor agregue una foto -"; 
    }

    //Validación de sexo
    if(inputSexo.value==''){
        if(bError==null){
            bError="";
        }
        inputSexo.style.border="1px solid #FF0000";
        bError = bError+"Seleccione opcion en el campo Sexo -";
    }else{
        inputSexo.style.border="0px solid #FF0000";
    }

    //Validación de la edad
    if(inputEdad.value == '' || (regexSoloNumeros.test(inputEdad.value) == false) || Number(inputEdad.value) <= Number(inputEdad.min)  || Number(inputEdad.value) >= Number(inputEdad.max)){
        inputEdad.style.border="1px solid #FF0000";
        if(bError==null){
            bError="";
        }
        bError = bError+"El campo Edad solo recibe numeros, y la edad de ser mayor a 15 y menor a 80 ";
    }else{
        inputEdad.style.border="0px solid #FF0000";
    }
  

    return bError;
};

function limpiarFormulario(){
    inputNumero.value=null;
    inputNombre.value=null;
    inputEdad.value=null;
    inputSexo.value=null;
    inputFoto.value="";
}