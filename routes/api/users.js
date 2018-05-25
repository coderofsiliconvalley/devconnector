const express = require("express");
const router = express.Router();

// @route GET api/userss
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
