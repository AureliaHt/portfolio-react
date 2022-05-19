const whiteList = require('./whiteList');

const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Non autorisé par le CORS'))
        }
    },
    credentials: true,
    'methods': 'GET, HEAD, PUT, POST, PATCH, DELETE',
    'preflightContinue': false,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;