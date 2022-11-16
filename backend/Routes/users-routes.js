const express = require('express');
const usersController = require('../Controllers/users-controller');
const router = require('./places-routes');

router.post('/register', usersController.postUser);
router.post('/login', usersController.postUserLogin);

module.exports = router;