const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index') 
};

indexCtrl.renderNosotros = (req, res) => {
    res.render('nosotros') 
};

indexCtrl.renderProductos = (req, res) => {
    res.render('productos')
};

indexCtrl.renderCarrito = (req, res) => {
    res.render('carrito')
};

module.exports = indexCtrl;