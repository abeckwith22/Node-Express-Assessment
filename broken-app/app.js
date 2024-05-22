// changed 'let' 'var' to just 'const'
const express = require('express');
const axios = require('axios');
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Middleware for logging
app.use(morgan('dev'));
// app.use(express.json); // for some reason code doesn't work as expected when using express.json
// app.use(express.urlencoded({ extended: true}));

const developers = { "developers": ["joelburton", "elie"] }; // example code I ran for debugging

app.post('/', async function(req, res, next) {
  try {
    // Promise.all to handle multiple asynchronous operations and not have to add variable out
    let results = await Promise.all(developers.developers.map(async function(d){
      const request = await axios.get(`https://api.github.com/users/${d}`);
      return {'name': request.data.name, 'bio': request.data.bio};
    }));
    // axios automatically serialize the string into JSON so we don't need to JSON.stringify(out)
    return res.send(results);
  }catch(err){ // for some reason there wan't an err object added on to catch
    console.error('Error:', err); // added more verbose catch rather than just throw an error
    // set a return here so that post request isn't stuck in '/'.
    return next(err);
  }
});

// set a constant port to app.listen, now console.log() when port has started
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
