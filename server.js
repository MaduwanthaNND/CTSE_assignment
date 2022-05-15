const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const deliveryAPI = require('./src/api/delivery.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if(error) {
        console.log('Database Error: ', error.message)
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req, res) => {
    res.send('API Working Successfully');
});

app.use('/delivery', deliveryAPI());

app.listen(PORT, () => {
    console.log(`Server is up and running in PORT ${PORT}`);
});