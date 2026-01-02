const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// CREATE inquiry
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const contact = await Contact.create({ name, email, message });
  res.status(201).json(contact);
});

// GET all inquiries
router.get("/", async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json(contacts);
});

// DELETE inquiry
router.delete("/:id", async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
