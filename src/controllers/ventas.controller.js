const ventaCtrl = {};


const Producto = require('../models/ventas');

    ventaCtrl.renderProductoForm = (req, res) => {
        res.render('product')
    }

    ventaCtrl.crearNuevoProducto = async (req, res) => {
        const {nit, productos, totalConsumido, fechaVenta} = req.body;
        const newProducto = new Producto({nit, productos, totalConsumido, fechaVenta});
        await newProducto.save()
        res.send('/src/views/product.hbs')
    }

module.exports = ventaCtrl;
