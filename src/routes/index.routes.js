const { Router } = require('express')
const router = Router();

const { renderIndex, renderNosotros, renderProductos, renderCarrito } = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/nosotros', renderNosotros);

router.get('/productos', renderProductos);

router.get('/carrito', renderCarrito);

module.exports = router;