require('dotenv').config();
const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express'),
      swaggerDocument = require('./swagger.json');


const app = express();
app.use( cors() );


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotesnpm 
app.use('/challenge/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/challenge', require('./routes/challenge'));


app.listen(process.env.PORT, () => {
  console.log(
    'Listening Server of port: \x1b[32m%s\x1b[0m',
    process.env.PORT
  );
});