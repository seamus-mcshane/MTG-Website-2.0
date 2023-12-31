// file the enforces the structure of users data

// requried packages
// installed packages
const mongoose = require("mongoose");

const Schema = mongoose.Schema  //function to create schema

const deckSchema = new Schema({
    deckName: {
        type: String,
        required: true,
        unique: true
    },
    deckList: {
        type: Array,
        // required: true
    }
}, {timestamps: true }) // second property of the Schema function that timestamps when the document is created or updated

module.exports = mongoose.model("Deck", deckSchema)