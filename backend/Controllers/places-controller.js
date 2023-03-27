
const fs = require('fs');
const path = require('path');

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
    const test = path.join(__dirname, "../../frontend/Views/register2.html")
    fs.access(test, function(error) {
        if (error) {
            throw new HttpError('Could not find a place for the provided place id.', 404);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
            return res.status(200).sendFile(path.join(__dirname, "../../frontend/Views/register2.html"));
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


exports.getError404 = getError404;
exports.getRegister = getRegister;
exports.getLogin = getLogin;

exports.getRoot = getRoot;