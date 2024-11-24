const express = require('express');
const app = express();
const port = 8000;

// Import routes
const indexRoutes = require('./routes/index');
const countryRoutes = require('./routes/country');
const nameRoutes = require('./routes/name');

// Use routes
app.use('/', indexRoutes);
app.use('/country', countryRoutes);
app.use('/name', nameRoutes);

// Route untuk menangani permintaan tidak valid
app.use((req, res) => {
    res.status(400).send('Bad Request');
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
