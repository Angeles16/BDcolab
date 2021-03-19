const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');


//Inicializacion
const app = express();

//Ajustes
app.set('port', process.env.PORT || 4000 );
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts' ),
    partialsDir: path.join(app.get('views'), 'partials' ),
    extname: '.hbs' 
}));
app.set('view engine', '.hbs');//motor de plantias 

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

//app.use(flash());

//global Variables
/*app.use((req, res, next) => {
    res.locals.error_msg = req.flash('error_msg');
    next();
});*/

//Rutas 
app.use(require('./routes/index.routes'));
app.use(require('./routes/productos.routes'));
app.use(require('./routes/user.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;