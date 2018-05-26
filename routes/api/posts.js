const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Post = require("../../models/Post");
const validatePostInput = require("../../validation/post");

// @route GET api/posts
router.get("/test", (req, res) => res.json({ msg: "Post Works" }));

// @route POST api/posts
// @desc Create post
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.name,
      user: req.user._id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
