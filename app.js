const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session');

//Controllers
const homePage = require('./controllers/homePage');
const getWhy = require('./controllers/getWhy');
const addPage = require('./controllers/addPage');
const yoursPage = require('./controllers/yoursPage');
const analiticssPage = require('./controllers/analiticsPage');
const createWhy = require('./controllers/createWhy');
const loginPage = require('./controllers/loginPage');
const login = require('./controllers/login');
const registrationPage = require('./controllers/registrationPage');
const registration = require('./controllers/registration');
const authMiddlewere = require('./middlewere/authMiddlewere');
const logout = require('./controllers/logout');
const chart = require('./controllers/chart');

mongoose.connect('mongodb+srv://ivan:Dominanta57_@cluster0.sqjs3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Mongo DB');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'E7Wv5N9KHnTxzf0ZCXhV' }));

app.get('/chart', authMiddlewere, chart);

app.get('/', authMiddlewere, homePage);

app.get('/why/:id', authMiddlewere, getWhy);

app.get('/add', authMiddlewere, addPage);

app.get('/yours', authMiddlewere, yoursPage);

app.get('/analitics', authMiddlewere, analiticssPage);

app.get('/login', loginPage);

app.get('/logout', logout);

app.post('/user/login', login);

app.get('/registration', registrationPage);

app.post('/user/registration', registration);

app.post('/create', authMiddlewere, createWhy);

module.exports = app;