const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { check, validationResult } = require("express-validator");

// @route POST api/users
// @desc Register a user
// @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please included a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Passed");
  }
);

module.exports = router;
