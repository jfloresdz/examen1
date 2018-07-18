'use strict'
let mongoose = require('mongoose');

let pokemonSchema = mongoose.Schema({
    Numero:{type: Number, unique:true,required:true},
    Nombre: { type: String,unique:true,required: true },
    Tipo1: { type: Number, required: true },
    Tipo2: { type: String, required: false },
    Foto: { type: String, required: true }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);