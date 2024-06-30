const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (request, response) => {
    const { name, email, password, role } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    return response.status(201).send('Registered successfully');
});

// Login
router.post('/login', async (request, response) => {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey');
        return response.json({ token });
    }
    response.status(401).send('Invalid Credentials');
});

module.exports = router;