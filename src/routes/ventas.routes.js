const { Router } = require("express")
const router = Router()

const { renderVentasForm, 
    crearNuevoVenta, 
    renderVentas, 
    renderEditFormVentas, 
    actualizarVenta, 
    eliminarVenta 
} = require('../controllers/ventas.controller');

//nuevo producto
router.get('/productos/new-producto', renderProductoForm)

router.post('/productosX/add', crearNuevoProducto)


router.get('/product', renderProductos)

// obtener notas
router.get('/productosX', renderProductoForm)

//editar
router.get('/productosX/edit/:id', renderEditForm)

router.put('/productosX/edit/:id', actualizarProducto)

//eliminar
router.delete('/productosX/eliminar/:id', eliminarProduct)

module.exports = router