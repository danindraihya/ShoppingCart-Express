const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyShoppingCart', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
}).then(res => console.log("Successfully connect to mongodb")).catch(err => console.log(err));