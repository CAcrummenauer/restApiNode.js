const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello CezarAC');
});

app.listen(3001);