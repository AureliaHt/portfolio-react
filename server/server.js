require('dotenv').config({path: './config/.env'});

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SERVER 
app.listen(process.env.PORT, () => {
    console.log(`listenning on port ${process.env.PORT}`);
})
