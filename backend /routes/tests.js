const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.get('/', async (req, res) => {
    const tests = await Test.find();
    res.json(tests);
});

router.post('/', async (req, res) => {
    const newTest = new Test(req.body);
    await newTest.save();
    res.status(201).json(newTest);
});

module.exports = router;
