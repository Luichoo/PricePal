const HttpError = require('../Models/http-error');
const fs = require('fs');
const path = require('path');
// const dummyPlaces = [{
//     id: 'p1',
//     title: 'Empire State Building',
//     description: 'One of the most famous sky scrapers in the world!',
//     location: {
//         lat: 40.7484474,
//         lng: -73.9871516
//     },
//     address: '20 W 34th St, New York, NY 10001, United States',
//     creator: 'u1'
// }];

const getRoot = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/index.html")
    
    fs.access(test, function(error) {
        if (error) {
            return res.status(404).sendFile(path.join(__dirname, "../../frontend/Views/construccion.html"));
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/index.html"));
        }
    })

};
const getLogin = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/login.html")
    
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
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/register.html"));
        }
    })
}

const getError404 = (req, res, next) => {
    const test = path.join(__dirname, "../../frontend/Views/construccion.html")
    
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            return res.status(404).sendFile(path.join(__dirname, "../../frontend/Views/construccion.html"));
        }
    })

};

// const getplaceByUserId = (req, res, next) => {
//     const userid = req.params.uid
//     const place = dummyPlaces.find(p => {
//         return p.creator === userid;
//     });
//     if (!place) {
//         return next(new Error('Could not find a place for the provided user id.', 404));
//     }
//     return res.json({ place });
// }
exports.getError404 = getError404;
exports.getRegister = getRegister;
exports.getLogin = getLogin;

exports.getRoot = getRoot;
// exports.getplaceById = getplaceById;
//exports.getplaceByUserId = getplaceByUserId;