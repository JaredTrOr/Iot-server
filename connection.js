require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.LINKMONGODB)
.then(() => console.log('Database connection!!'))
.catch(err => console.log(err));