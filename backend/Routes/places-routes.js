const express = require('express');
const HttpError = require('../Models/http-error');
const dummyPlaces = [{
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    location: {
        lat: 40.7484474,
        lng: -73.9871516
    },
    address: '20 W 34th St, New York, NY 10001, United States',
    creator: 'u1'
}];

// This is a router, which is a middleware function that handles routes

const router = express.Router();

router.get('/:pid', (req, res, next) => {
    const placeid = req.params.pid
    const place = dummyPlaces.find(p => {
        return p.id === placeid;
    });
    console.log('GET request in Places');

    if (!place) {

        throw new HttpError('Could not find a place for the provided place id.', 404);

    }
    return res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
    const userid = req.params.uid
    const place = dummyPlaces.find(p => {
        return p.creator === userid;
    });
    if (!place) {
        return next(new Error('Could not find a place for the provided user id.', 404));
        //return res.status(404).json({ message: 'Could not find a place for the provided user id.' });
    }
    return res.json({ place });
});

module.exports = router;