const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    imagen: { type: String, require: true },
    title: { type: String, require: true },
    descripcion: { type: String, require: true },
    precio: { type: String, require: true },
    precioDescuento: { type: String, require: true },
    cantidadStock: { type: String, require: true },
    categoria: {type: String, require: true}
}, {
    timestamps: true //cuando fue creado y cuando fue actualizado 
})

module.exports = model('Producto', NoteSchema);