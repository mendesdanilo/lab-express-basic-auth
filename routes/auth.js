const express = require('express');
const router = express.Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs"); 

router.get('/signup', (req, res) => {
    res.render("auth/signup");
});

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body; 
await User.create({ username, password });

res.redirect("/");

});

module.exports = router;
