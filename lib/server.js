const StudentController = require('./controllers/studentController');

const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Code Challenge');
});

app.get('/students', (req, res) => {
    const partner = StudentController.getAllStudentsAndTheirFields();
    res.json(partner);
});

app.get('/students/emails', (req, res) => {
    const mails = StudentController.getEmails();
    res.json(mails);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});