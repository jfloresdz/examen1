const express = require('express');
const router = express.Router();
const pokemons = require('./pokemons.api');

router.route('/registrarPokemons')
    .post(function(req, res){
    pokemons.registrar(req, res);
});

router.route('/listarPokemons')
    .get(function(req, res){
    pokemons.listar(req, res);
});

router.route('/filtrarPokemons')
    .post(function(req, res){
    pokemons.filtrar(req, res);
});

module.exports = router;