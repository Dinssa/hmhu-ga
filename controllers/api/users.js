
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function create(req, res) {
    try{
        // Attempt to create the user from request body
        const user = await User.create(req.body);

        // Generate a jwt that contains the user information and is signed with the secret
        const token = createJWT(user);

        return res.json(token);
    } catch (err) {
        return res.status(401).json(err);
    }

    res.json({
        user: {
        name: req.body.name,
        email: req.body.email
        }
    });
}

function createJWT(user) {
    return jwt.sign(
        { user }, // data payload
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

async function login(req, res) {
    try{
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch (err) {
        return res.status(401).json(err);
    }
}

module.exports = {
    create,
    login
};