const { Router } = require('express');
const router = Router();

const { renderSignUpForm, 
    renderSigninForm, 
    signup, 
    signin, 
    logout 
} = require('../controllers/user.controller') 

router.get('/user/signup',renderSignUpForm );

router.post('/user/signup',signup );

router.get('/user/signin',renderSigninForm );

router.post('/user/signup',signin );

router.get('/users/logout', logout);



module.exports = router;