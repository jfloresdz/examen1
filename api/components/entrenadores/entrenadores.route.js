const express = require('express');
const router = express.Router();
const entrenadores = require('./entrenadores.api');

router.route('/registrarEntrenadores')
    .post(function(req, res){
    entrenadores.registrar(req, res);
});

router.route('/listarEntrenadores')
    .get(function(req, res){
    entrenadores.listar(req, res);
});

router.route('/filtrarEntrenadores')
    .post(function(req, res){
    entrenadores.filtrar(req, res);
});

module.exports = router;