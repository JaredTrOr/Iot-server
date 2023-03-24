require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Database connection!!'))
.catch(err => console.log(err));