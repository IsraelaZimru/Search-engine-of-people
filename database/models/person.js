const mongoose = require("mongoose");

//creatind new ducoment:
const personSchema = mongoose.Schema({
    name: String,
    gender: {
        gender: String,
        probability: {
            type: Number,
            default: 0,
        },
        count: {
            type: Number,
            default: 0,
        },
    },
    nationality: [{
        country_id: String,
        probability: {
            type: Number,
            default: 0,
        }
    }]
});

const PersonModal = mongoose.model("PersonModal", personSchema);

module.exports = PersonModal;