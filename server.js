const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/mandatory_db');

require('./models/student.js');

app.use(bodyParser.json());
app.use(require('./routes/api/student-api.js'));

app.listen(4000, function () {
    console.log('Server on!');
});