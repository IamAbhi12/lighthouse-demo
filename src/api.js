const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
}
);

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/product', (req, res) => {
    res.render('product');
});


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);