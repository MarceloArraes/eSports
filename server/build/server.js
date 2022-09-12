"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log('req', req);
    res.send('Hello World');
});
app.listen(3000);
