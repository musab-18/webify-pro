const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


// POST a new message
router.post('/', async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();





        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
