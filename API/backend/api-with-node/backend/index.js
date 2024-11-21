// server.js
const express = require('express');
const app = express();
const port = 3000;

// Mock product data
const products = Array.from({ length: 10 }, (v, k) => ({
    id: k + 1,
    name: `Product ${k + 1}`,
    price: (Math.random() * 100).toFixed(2),
}));

// Endpoint to fetch products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
