const{Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: { type: String, require: true },
    descripcion: { type: String, require: true }
}, {
    timestamps: true //cuando fue creado y cuando fue actualizado 
})

module.exports = model('Producto', NoteSchema);