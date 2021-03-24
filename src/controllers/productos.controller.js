const productoCtrl = {};

const Producto = require('../models/producto');

    productoCtrl.renderProductoForm = (req, res) => {
        res.render('productos/new-Product')
    }

    productoCtrl.crearNuevoProducto = async (req, res) => {
        const {imagen, title, descripcion, precio, precioDescuento, cantidadStock} = req.body;
        const newProducto = new Producto({imagen, title, descripcion, precio, precioDescuento, cantidadStock});
        await newProducto.save()
        res.send('nueva nota')
    }

    productoCtrl.renderProductos = (req, res) => {
        res.send('productos renderisados')
    }

    productoCtrl.renderEditForm = (req, res) => {
        res.send('render editar formulario de producto')
    }

    productoCtrl.actualizarProducto = (req, res) => {
        res.send('nota actualizada')
    }

    productoCtrl.eliminarProduct = (req, res) => {
        res.send('eliminando producto')
    }

   
module.exports = productoCtrl;