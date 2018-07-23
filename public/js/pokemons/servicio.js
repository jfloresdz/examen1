'use strict';

function registrarPokemones(infoPokemon){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarPokemons',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Numero:infoPokemon[0],
            Nombre:infoPokemon[1],
            Tipo1:infoPokemon[2],
            Tipo2:infoPokemon[3],
            Foto:infoPokemon[4]
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

function obtenerListaPokemones(){
    let listaPokemones = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarPokemons',
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
    
    return listaPokemones;
}

function filtrarPokemones(cTipo,cValor){
    let listaPokemones = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/filtrarPokemons',
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
    
    return listaPokemones;
}