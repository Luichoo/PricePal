const getplaceByUserId = (req, res, next) => {
    const userid = req.params.uid
    const place = dummyPlaces.find(p => {
        return p.creator === userid;
    });
    if (!place) {
        return next(new Error('Could not find a place for the provided user id.', 404));
        //return res.status(404).json({ message: 'Could not find a place for the provided user id.' });
    }
    return res.json({ place });
}