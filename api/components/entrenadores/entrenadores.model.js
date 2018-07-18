'use strict'
let mongoose = require('mongoose');

let entrenadorSchema = mongoose.Schema({
    Numero:{type: Number, unique:true,required:true},
    Nombre: { type: String, required: true },
    Edad: { type: Number, required: true },
    Sexo: { type: String, required: true },
    Foto: { type: String, required: true }
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);