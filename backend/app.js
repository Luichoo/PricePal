require('dotenv').config({path: `${__dirname}/.env`});
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const app = express();
// uso de diretorios estaticos
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('frontend'));
app.use(express.static('../frontend'));
app.use(express.static('../frontend/Js'));
app.use(express.static("../frontend/Media"));
app.use(express.static("../frontend/css"));
app.use(placesRoutes);
app.use(usersRoutes);

app.listen(port, () => {
    console.log('Server is up and running on http://localhost:' + port);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
})

module.exports = app;