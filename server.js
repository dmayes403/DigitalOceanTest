var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 3000;

var app = express();

// view engine setup
// app.engine('html', require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, () => {
    `listening on port ${port}`
});

module.exports = app;