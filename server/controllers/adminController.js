const ObjectID = require('mongoose').Types.ObjectId;
const AdminModel = require('../models/admin');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');


// DUREE DE VIE DU COOKIE CONTENANT LE TOKEN (3J)
const maxAge = 3 * 24 * 60 * 60 * 1000 ;

// FONCTION POUR CREER LE TOKEN AVEC VARIABLE D'ENVIRONNEMENT POUR DECODER LE TOKEN
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

// S'INSCRIRE  SIGN UP
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {identifiant, password} = req.body

    try {
        const admin = await AdminModel.create({identifiant, password});
        res.status(201).json({ admin : admin._id});
    }
    catch(err) {
        const errors = signUpErrors(err);
        res.status(200).send({ errors})
    }
}

// SE CONNECTER   SIGN IN
module.exports.signIn = async (req, res) => {
    const { identifiant, password } = req.body

    try {
        const admin = await AdminModel.login(identifiant, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge});
        res.status(200).json({ admin: admin._id})
    }
    catch (err){
        const errors = signInErrors(err);
        res.status(200).json({ errors})
    }
};

// SE DECONNECTER
module.exports.logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
};

module.exports.adminInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    AdminModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown : ' + err);
    }).select('-password');
}