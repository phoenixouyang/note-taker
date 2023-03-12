// require dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

// GET routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/indec.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;