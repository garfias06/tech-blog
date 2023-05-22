// Express.js
const path = require('path');
const express = require('express');
const session = require('express-session');
// Set up Handlebars.js engine with custom helpers
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// Importing connection setup for sequelize
const sequelize = require('./config/connection');
// initalize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// routes
const routes = require('./controllers');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

// configure express, setting up sessions
const sess = {
    secret: process.env.SECRET,
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Setting up handlebars
// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
