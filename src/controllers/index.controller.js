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

module.exports = indexCtrl;