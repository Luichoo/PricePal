const express = require('express');
const placesControllers = require('../Controllers/places-controller')

// This is a router, which is a middleware function that handles routes

const router = express.Router();
//router.get('/', placesControllers.getMedia);

router.get('/', placesControllers.getRoot);
router.get('/login', placesControllers.getLogin);
router.get('/register', placesControllers.getRegister);
// router.get('/:pid', placesControllers.getplaceById);

router.get('/user/:uid', placesControllers.getplaceByUserId);
router.get('*', placesControllers.getError404);
module.exports = router;