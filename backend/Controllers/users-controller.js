const Users = require('../Models/Users-model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const expressjwt = require('express-jwt');
const signToken = (_id) => jwt.sign({ _id }, process.env.TOKEN_SECRET);

// mongo connection

const mongostring = process.env.MONGOurl;
if (mongoose.connect(mongostring)) {
    console.log('Connected to MongoDB');
} else {
    console.log('Error connecting to MongoDB');
}
//

const postUser = async(req, res, next) => {
    const { body } = req;
    try {
        const isUser = await Users.findOne({ username: body.username });
        if (isUser) {
            return res.status(403).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(body.password, salt);

        const user = await Users.create({
            username: body.username,
            password: hash,
            salt: salt,
        });
        const signed = await signToken(user._id);
        res.status(201).send(signed);
    } catch (err) {
        res.status(500).send(err.message);
    }
};
const postUserLogin = async(req, res, next) => {
    const { body } = req;
    try {
        const user = await Users.findOne({ username: body.username });
        if (!user) {
            return res.status(403).json({ message: 'User does not exist' });
        }
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: 'Wrong password' });
        }
        const signed = await signToken(user._id);
        console.log('body.username: ' + body.username);
        res.status(201).send(signed);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
exports.postUserLogin = postUserLogin;
exports.postUser = postUser;