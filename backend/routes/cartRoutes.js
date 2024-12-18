const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Example in-memory cart for simplicity
let cart = [];

// Add to cart
router.post('/add', authMiddleware, (req, res) => {
    const { productId, quantity } = req.body;
    cart.push({ productId, quantity, userId: req.user.id });
    res.json({ message: 'Product added to cart.', cart });
});

// Get user cart
router.get('/', authMiddleware, (req, res) => {
    const userCart = cart.filter(item => item.userId === req.user.id);
    res.json(userCart);
});

// Remove from cart
router.delete('/remove/:productId', authMiddleware, (req, res) => {
    cart = cart.filter(item => item.productId !== req.params.productId || item.userId !== req.user.id);
    res.json({ message: 'Product removed from cart.', cart });
});

module.exports = router;
