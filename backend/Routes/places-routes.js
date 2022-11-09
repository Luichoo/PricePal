const express = require('express');
const placesControllers = require('../Controllers/places-controller')

// This is a router, which is a middleware function that handles routes

const router = express.Router();

router.get('/:pid', placesControllers.getplaceById);

router.get('/user/:uid', placesControllers.getplaceByUserId);

module.exports = router;