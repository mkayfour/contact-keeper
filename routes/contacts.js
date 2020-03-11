const express = require("express");

const router = express.Router();

// @route GET api/contacts
// @desc Get all user contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all user contacts");
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
