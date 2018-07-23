'use strict'

const pokemonModel = require('./pokemons.model');

module.exports.registrar = function(req,res){
    let nuevoPokemon = new pokemonModel({
        Numero:req.body.Numero,
        Nombre:req.body.Nombre,
        Tipo1:req.body.Tipo1,
        Tipo2:req.body.Tipo2,
        Foto:req.body.Foto
    });

    nuevoPokemon.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el pokemon, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El pokemon se registró con éxito'});
        }
    });
};

module.exports.listar = function(req,res){
    pokemonModel.find().then(
        function(pokemons){
            res.send(pokemons);
        }
    );
};

module.exports.filtrar = function(req, res){
    switch(req.body.tipo)
    {
        case "1":
        pokemonModel.find(
            {
                "Numero": req.body.valor
            }
            ).then(
                function(pokemons){
                    res.send(pokemons);
                });
        break;

        case "2":
        pokemonModel.find(
            {
                "Nombre":  {  
                    $regex: new RegExp(req.body.valor, "ig")
                } 
            }
            ).then(
                function(pokemons){
                    res.send(pokemons);
                });
        break;

        case "3":
        pokemonModel.find(
            {
                "Tipo1": req.body.valor
            }
            ).then(
                function(pokemons){
                    res.send(pokemons);
                });
        break;

        case "4":
        pokemonModel.find(
            {
                "Tipo2": req.body.valor
            }
            ).then(
                function(pokemons){
                    res.send(pokemons);
                });
        break;
    }
};