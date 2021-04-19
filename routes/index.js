const homeRoute = require('./home');
const login = require('./login');
const logout = require('./logout');
const userRoute = require('./user');
const signUp = require('./signup');
const signUpSuccess = require('./signupsuccess');
const about = require('./about'); 
const help = require('./help');
const hci = require('./hci');
const discrete = require('./discrete');

const constructorMethod = (app) => {
    app.use('/', homeRoute);
    app.use('/login', login);
    app.use('/logout', logout);
    app.use('/user', userRoute);
    app.use('/signup', signUp);
    app.use('/signupsuccess', signUpSuccess);
    app.use('/about', about);
    app.use('/help', help);
    app.use('/hci', hci);
    app.use('/discrete', discrete);


    app.use('*', (req, res) => {
        console.log('redirecting...');
        
        res.redirect('/');
    });
};

module.exports = constructorMethod;