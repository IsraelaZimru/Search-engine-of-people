const axios = require("axios");

async function createPerson(name) {
    try {
        const genderResponse = await axios(`https://api.genderize.io/?name=${name}`)
        const gender = genderResponse.data;

        const nationalityResponse = await axios(`https://api.nationalize.io/?name=${name}`)
        const nationality = nationalityResponse.data;
        return {
            name,
            gender,
            nationality: nationality.country
        };
    } catch (error) {
        throw error(error)
    }
}


module.exports = {
    createPerson
}