require('dotenv').config({path: './config/.env'});
require('./config/db');

const adminRoutes = require ('./routes/admin.routes');
const {checkAdmin, requireAuth} = require('./middleware/auth.middleware');

const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '../build'));
app.use(cookieParser());

app.use(cors(corsOptions));

// JWT
app.get('*', checkAdmin);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

// ROUTES
app.use('/admin', adminRoutes);

// SERVER 
app.listen(process.env.PORT, () => {
    console.log(`listenning on port ${process.env.PORT}`);
})
