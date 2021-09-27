// ________________________ IMPORTS ________________________
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
const productRoutes = require('./Routes/product_routes');

// ________________________ DATABASE CONNECTION ________________________

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(4000, (err) => {
            if (err) console.log(err);
            else console.log('Server is running!');
        })
        console.log("Mongoose Connected!✅")
    })
    .catch(() => console.log("Its error from DB!"))


// ________________________ MIDDLEWARES ________________________

app.use(cors({
    origin: "*"
}))

// ________________________ ROUTES ________________________

app.get('/', (req, res) => {
    res.send("Hey Rohit, It works!");
})

app.use('/products', productRoutes);

// ________________________________________________________

