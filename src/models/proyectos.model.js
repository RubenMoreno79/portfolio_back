const { Schema, model } = require('mongoose');

const proyectoSchema = new Schema({
    titulo: String,
    descripcion: String,
    cliente: String,
    categoria: String

});


module.exports = model('proyecto', proyectoSchema);
