const express = require('express');
const { createOrGetPerson, getPeople, deletePerson } = require("../controllers/person")
const router = express.Router();

router.post("/", createOrGetPerson);
router.get("/", getPeople);
router.delete("/", deletePerson);

module.exports = router;
