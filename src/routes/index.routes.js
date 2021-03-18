const { Router } = require('express')
const router = Router();

const { renderIndex, renderNosotros, renderProductos } = require('../controllers/index.controller')

router.get('/', renderIndex);

router.get('/nosotros', renderNosotros);

router.get('/productos', renderProductos);

module.exports = router;