const HttpError = require('../Models/http-error');
const fs = require('fs');
const path = require('path');
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
const getRoot = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/index.html")
    console.log(test);
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/index.html"));
        }
    })

};
const getLogin = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/login.html")
    console.log(test);
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/login.html"));
        }
    })
}
const getRegister = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/register.html")
    console.log(test);
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/register.html"));
        }
    })
}
const getMedia = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Media")
    console.log(test);
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Media"));
        }
    })

};

const getplaceById = (req, res, next) => {
    const placeid = req.params.pid
    const place = dummyPlaces.find(p => {
        return p.id === placeid;
    });
    console.log('getplacebyId');

    if (!place) {

        throw new HttpError('Could not find a place for the provided place id.', 404);

    }
    return res.json({ place });
};
const getplaceByUserId = (req, res, next) => {
    const userid = req.params.uid
    const place = dummyPlaces.find(p => {
        return p.creator === userid;
    });
    if (!place) {
        return next(new Error('Could not find a place for the provided user id.', 404));
    }
    return res.json({ place });
}

exports.getRegister = getRegister;
exports.getLogin = getLogin;
exports.getMedia = getMedia;
exports.getRoot = getRoot;
exports.getplaceById = getplaceById;
exports.getplaceByUserId = getplaceByUserId;