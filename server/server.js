const express = require('express');
const app = express();
app.use(express.static('server/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/hr';

mongoose.connection.on('connected', function () {
    console.log('mongoose connected to: ', databaseUrl);
})

mongoose.connection.on('error', function (error) {
    console.log('mongoose connection error: ', error);   
})

mongoose.connect(databaseUrl);

const hrRouter = require('./routers/employee-router');
app.use('/hr', hrRouter);

const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log('listening on port', port);  
});