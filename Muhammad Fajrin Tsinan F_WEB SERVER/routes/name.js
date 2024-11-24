const express = require('express');
const router = express.Router();

const motogp = require('./data'); // Jika data ingin dipisahkan

// Route untuk pengelompokan berdasarkan nama pemenang
router.get('/', (req, res) => {
    const groupedByName = motogp.reduce((acc, item) => {
        const name = `${item.winner.firstName} ${item.winner.lastName}`;
        if (!acc[name]) {
            acc[name] = [];
        }
        acc[name].push(item);
        return acc;
    }, {});
    res.json(groupedByName);
});

module.exports = router;
