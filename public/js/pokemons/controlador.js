'use strict';

imprimirListaPokemones();

let botonRegistrar = document.querySelector('#btnRegistrar');

let botonBuscar = document.querySelector('#btnBuscar');

botonBuscar.addEventListener('click', filtrarDatos);

botonRegistrar.addEventListener('click', obtenerDatos);


let inputNumero = document.querySelector('#inputNumero');
let inputNombre = document.querySelector('#inputNombre');
let inputTipo1 = document.querySelector('#inputTipo1');
let inputTipo2 = document.querySelector('#inputTipo2');
let inputFoto = document.querySelector('#inputFoto');
let inputBuscar = document.querySelector('#inputBuscar');

llenarTipos();


function obtenerDatos(){
    let infoPokemon =[];
    let bError = false;
    let respuesta=null;

    infoPokemon.push(
        inputNumero.value,
        inputNombre.value,
        inputTipo1.value,
        inputTipo2.value,
        inputFoto.value   
    );
    
    bError = validar();
    if(bError != null){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el Pokemon',
            text: bError,
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el Pokemon');
    }else{
        respuesta=registrarPokemones(infoPokemon);
        if(respuesta.success==true){
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: respuesta.msg,
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
        imprimirListaPokemones();
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

function imprimirListaPokemones(){
    let listaPokemones = obtenerListaPokemones();
    let tbody = document.querySelector('#tbPokemones tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemones.length; i++){
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        let cFoto = fila.insertCell();
        cNumero.innerHTML = listaPokemones[i]['Numero'];
        cNombre.innerHTML = listaPokemones[i]['Nombre'];
        cTipo1.innerHTML = listaPokemones[i]['Tipo1'];
        cTipo2.innerHTML = listaPokemones[i]['Tipo2'];
        cFoto.innerHTML = '<img src="'+listaPokemones[i]['Foto']+ '">';
        
        }
    
};

function llenarTipos(){
    let Tipos = [
        {value: "BUG", text: "Bug"},
        {value: "Dark", text: "Dark"},
        {value: "Dragon", text: "Dragon"},
        {value: "Electric", text: "Electric"},
        {value: "Fairy", text: "Fairy"},
        {value: "Fighting", text: "Fighting"},
        {value: "Fire", text: "Fire"},
        {value: "Flying", text: "Flying"},
        {value: "Ghost", text: "Ghost"},
        {value: "Grass", text: "Grass"},
        {value: "Ground", text: "Ground"},
        {value: "Ice", text: "Ice"},
        {value: "Normal", text: "Normal"},
        {value: "Poison", text: "Poison"},
        {value: "Psychic", text: "Psychic"},
        {value: "Rock", text: "Rock"},
        {value: "Steel", text: "Steel"},
        {value: "Water", text: "Water"}
    ];

    let option="";
    let il = Tipos.length;

    for (let i=0; i < il; i ++) {
        option = document.createElement('option');
        option.setAttribute('value', Tipos[i].value);
        option.appendChild(document.createTextNode(Tipos[i].text));
        inputTipo1.appendChild(option);
    }

    for (let i=0; i < il; i ++) {
        option = document.createElement('option');
        option.setAttribute('value', Tipos[i].value);
        option.appendChild(document.createTextNode(Tipos[i].text));
        inputTipo2.appendChild(option);
    }
}

function filtrarDatos(){
    if(inputBuscar.value!=null || inputBuscar.value!=""){
    let listaPokemones = filtrarPokemones("2",inputBuscar.value);
    let tbody = document.querySelector('#tbPokemones tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaPokemones.length; i++){
        let fila = tbody.insertRow();
        let cNumero = fila.insertCell();
        let cNombre = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        let cFoto = fila.insertCell();
        cNumero.innerHTML = listaPokemones[i]['Numero'];
        cNombre.innerHTML = listaPokemones[i]['Nombre'];
        cTipo1.innerHTML = listaPokemones[i]['Tipo1'];
        cTipo2.innerHTML = listaPokemones[i]['Tipo2'];
        cFoto.innerHTML = '<img src="'+listaPokemones[i]['Foto']+ '">';
        
    }
    }else{
        imprimirListaPokemones();
    }
};


function validar(){
    let bError = null;
    
    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

     //Validación 
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

    //Validación de Tipo1
    if(inputFoto.value == ''){
        if(bError==null){
            bError="";
        }
        bError = bError+"Por favor agregue una foto -"; 
    }

    //Validación de la Tipo1
    if(inputTipo1.value == ''){
        inputTipo1.style.border="1px solid #FF0000";
        if(bError==null){
            bError="";
        }
        bError = bError+"Seleccione Tipo 1";
    }else{
        inputTipo1.style.border="0px solid #FF0000";
    }
  

    return bError;
};

function limpiarFormulario(){
    inputNumero.value=null;
    inputNombre.value=null;
    inputTipo1.value="";
    inputTipo2.value="";
    inputFoto.value="";
}