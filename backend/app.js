const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;


const placesRoutes = require('./routes/places-routes');
const app = express();
// uso de diretorios estaticos
app.use(bodyParser.json());
app.use(express.static('../frontend'));
app.use(express.static('../frontend/Js'));
app.use(express.static("../frontend/Media"));
app.use(express.static("../frontend/css"));
app.use(placesRoutes);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
})