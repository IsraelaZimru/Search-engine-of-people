const mongoose = require("mongoose");
const PersonModal = require("../database/models/person");
const { createPerson } = require("./utils")


const createOrGetPerson = async (req, res) => {
    try {
        const { name } = req.body;
        console.log("namee", req.body);
        const personExists = await PersonModal.findOne({ name }).exec(); // return null if dont exists
        if (personExists) return res.status(201).json(personExists);

        const getData = await createPerson(name);

        const newPerson = new PersonModal(getData); // using model to create new obj
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

const deletePerson = async (req, res) => {
    try {
        const { id } = req.body;
        console.log("dataa", req.body);
        const personExists = await PersonModal.findOneAndDelete({ _id: id }).exec(); // return null if dont exists
        console.log("personExists", personExists);
        if (!personExists) {
            throw new Error("name don`t exists")
        }


        res.status(200).json({ message: ` ${personExists.name} deleted successfully` });
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

module.exports = {
    createOrGetPerson,
    getPeople,
    deletePerson
}