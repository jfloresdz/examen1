'use strict'

const entrenadorModel = require('./entrenadores.model');

module.exports.registrar = function(req,res){
    let nuevoEntrenador = new entrenadorModel({
        Numero :req.body.Numero, 
        Nombre :req.body.Nombre,
        Edad :req.body.Edad,
        Sexo :req.body.Sexo,
        Foto :req.body.Foto
    });

    nuevoEntrenador.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el entrenador, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El entrenador se registró con éxito'});
        }
    });
};

module.exports.listar = function(req,res){
    entrenadorModel.find().then(
        function(entrenadores){
            res.send(entrenadores);
        }
    );
};

module.exports.filtrar = function(req, res){
    switch(req.body.tipo)
    {
        case "1":
        entrenadorModel.find(
            {
                "Numero": req.body.valor
            }
            ).then(
                function(entrenadores){
                    res.send(entrenadores);
                });
        break;

        case "2":
        entrenadorModel.find(
            {
                "Nombre": req.body.valor
            }
            ).then(
                function(entrenadores){
                    res.send(entrenadores);
                });
        break;

        case "3":
        entrenadorModel.find(
            {
                "Edad": req.body.valor
            }
            ).then(
                function(entrenadores){
                    res.send(entrenadores);
                });
        break;

        case "4":
        entrenadorModel.find(
            {
                "Sexo": req.body.valor
            }
            ).then(
                function(entrenadores){
                    res.send(entrenadores);
                });
        break;
    }
};