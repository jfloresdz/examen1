'use strict';

function registrarEntrenador(infoEntrenador){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarEntrenadores',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Numero:infoEntrenador[0],
            Nombre:infoEntrenador[1],
            Edad:infoEntrenador[2],
            Sexo:infoEntrenador[3],
            Foto:infoEntrenador[4]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      console.log(respuesta);
      return respuesta;
     
}

function obtenerListaEntrenadores(){
    let listaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarEntrenadores',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaEntrenadores;
}

function filtrarEntrenadores(cTipo,cValor){
    let listaEntrenadores = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarEntrenadores',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            tipo: cTipo,
            valor: cValor
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaEntrenadores;
}