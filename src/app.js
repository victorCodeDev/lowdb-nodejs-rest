const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewars
app.use(morgan());
app.use(express.json());

// routes
app.use(require('./routes/task.routes'));


module.exports = app;