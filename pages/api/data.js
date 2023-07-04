const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM posts';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error querying database:', err);
            res.status(500).json({ error: 'Failed to retrieve data' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;