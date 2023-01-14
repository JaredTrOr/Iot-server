require('dotenv').config();
require('./connection'); //Connection with MONGODB

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/router');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


let sessionStore = new MongoDBStore({
    uri: process.env.MONGODB_URL,
    collection: 'sessions'
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.MONGODB_URL,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //Equals a day
    }
}));
app.use(cors());
app.use('/', router);


app.listen(port, () => console.log(`Server on port ${port}`));