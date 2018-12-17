const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 4000;

const externalApi = 'http://api.gios.gov.pl/pjp-api/rest';

app.use('/api', (req, res) => req.pipe(request(`${externalApi}${req.url}`)).pipe(res));

app.listen(port, () => {
    console.log('Server is up!');
});
