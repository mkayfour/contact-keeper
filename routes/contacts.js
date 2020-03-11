const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

// @route GET api/contacts
// @desc Get all user contacts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });

    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "server error" });
    return;
  }
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route PUT api/contact
// @desc Update a contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/contact
// @desc Delete contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;