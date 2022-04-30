const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Code Challenge');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});