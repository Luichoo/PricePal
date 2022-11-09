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


const getplaceById = (req, res, next) => {
    const placeid = req.params.pid
    const place = dummyPlaces.find(p => {
        return p.id === placeid;
    });
    console.log('GET request in Places');

    if (!place) {

        throw new HttpError('Could not find a place for the provided place id.', 404);

    }
    return res.json({ place });
};

exports.getplaceById = getplaceById;
exports.getplaceByUserId = getplaceByUserId;