const mongoose = require("mongoose");
const PersonModal = require("../database/models/person");

const createPerson = async (req, res) => {
    const person = req.body;
    const newPerson = new PersonModal(person); // using model to create new obj
    try {
        await newPerson.save(); //tring to save asny new document in DB

        res.status(201).json(newPerson); //success creating new document
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

const getPeople = async (req, res) => {
    try {
        const people = await PersonModal.find();

        res.status(200).json(people);
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

module.exports = {
    createPerson,
    getPeople
}