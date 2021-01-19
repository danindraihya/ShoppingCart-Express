const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductController = require('./Controller/ProductController');

const app = express();

app.use(cors());
app.use(bodyParser.json());
require('./mongoose');
app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/product', ProductController);

app.listen(3000, () => {
    console.log('Listening on localhost port 3000');
});