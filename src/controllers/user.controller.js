const usersCtrl = {};

const User = require('../models/User')

//formulario crear usuario
usersCtrl.renderSignUpForm = (req, res) => {
    res.render('signup');
}
usersCtrl.signup = async(req, res) => {
    const errors = [];

    const {usuario, email, password, confirm_password, telefono, direccion} = req.body;
    if(password != confirm_password) {
        errors.push({text: 'La contrasenia no coincide'});
    }
    if(password.length < 4) {
        errors.push({text: 'La contrasenia debe tener por lo menos 4 caracteres'});
    }
    if(errors.length > 0) {
        res.render('signup', {
            errors,
            usuario,
            email,
            telefono,
            direccion
        })
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser) {
            req.flash('error_msg', 'El correo ya esta en uso');
            res.redirect('singup');  
        } else {
            const newUser = new User({usuario, email, password, telefono, direccion});
            await newUser.save();
            res.redirect('signin');
        }
    }


};

//Formulario iniciar secion
usersCtrl.renderSigninForm = (req, res) => {
    res.render('signin');
}
usersCtrl.signin = (req, res) => {
    res.send('Usuario Iniciado con exito');
}


usersCtrl.logout = (req, res) => {
    res.send('xxxxx');
}



module.exports = usersCtrl;