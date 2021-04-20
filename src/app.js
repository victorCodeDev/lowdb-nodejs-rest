const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewars
app.use(morgan());
app.use(express.json());

// routes



app.listen(3000);
console.log('Server on port', 3000);