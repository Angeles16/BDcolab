const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    nit: { type: String, require: true },
    productos: { type: String, require: true },
    totalConsumido: { type: String, require: true },
    fechaVenta: { type: Date, require: true }
}, {
    timestamps: true //cuando fue creado y cuando fue actualizado 
})

module.exports = model('Ventas', NoteSchema);