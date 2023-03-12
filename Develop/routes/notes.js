const express = require('express');
const router = express.Router();
const noteRoutes = require('./apiRoutes')

router.use(noteRoutes);

module.exports = router;