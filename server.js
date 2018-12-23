const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

const externalApi = 'http://api.gios.gov.pl/pjp-api/rest';

app.use(express.static(path.join(__dirname, 'client/build')));

// proxy for gios api
app.use('/api', (req, res) =>
    req
        .pipe(request(`${externalApi}${req.url}`))
        .on('response', res => (res.headers['access-control-allow-origin'] = '*'))
        .pipe(res),
);

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
