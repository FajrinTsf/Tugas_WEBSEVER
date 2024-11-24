const express = require('express');
const router = express.Router();

const motogp = require('./data'); // Jika data ingin dipisahkan

// Route untuk pengelompokan berdasarkan negara
router.get('/', (req, res) => {
    const groupedByCountry = motogp.reduce((acc, item) => {
        const country = item.winner.country;
        if (!acc[country]) {
            acc[country] = [];
        }
        acc[country].push(item);
        return acc;
    }, {});
    res.json(groupedByCountry);
});

module.exports = router;
