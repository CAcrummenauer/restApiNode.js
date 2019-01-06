const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Cezar');
});

app.listen(3001);