const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send('XDC Price Bot is running...');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;