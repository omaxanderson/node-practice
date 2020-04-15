const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    const usernames = ["test1", "test2", "test3"];
    res.render("index", {usernames: usernames});
});

module.exports = router;