require('dotenv').config();
require('./connection'); //Connection with MONGODB

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/router');
const cors = require('cors');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.MONGODB_URL,
    resave: false,
    saveUninitialized: false
}));
app.use(cors());
app.use('/', router);


app.listen(port, () => console.log(`Server on port ${port}`));