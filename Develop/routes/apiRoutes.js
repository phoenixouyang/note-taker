const express = require('express');
const router = express.Router();
const uuid = require('uuid');


router.get('/api/notes', (req, res) =>
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)))
);

router.post('/api/notes', (req, res) => {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text,
    };
    readAndAppend(res.json(newNote), '../db/db.json');
});

module.exports = router;