const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');
let notes = require('../db/db.json');

// GET route to retrieve all notes
router.get('/notes', (req, res) =>{
    notes = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notes);
});

// POST route for saving a new note
router.post('/notes', (req, res) => {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text,
    };
    
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), (err, res) => {
        if(err) console.error(err);
    });

    res.json(newNote);
});

module.exports = router;