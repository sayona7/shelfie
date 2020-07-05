require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})
.catch(error => console.log(error));

// Endpoints here


app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));