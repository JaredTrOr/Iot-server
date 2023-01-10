require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/router');

app.use(express.json());
app.use('/', router);


app.listen(port, () => console.log(`Server on port ${port}`));