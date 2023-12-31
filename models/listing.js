const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const listingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    contributions: {
        type: String,
    },
    ratings: {
        type: Number,
    },
    date: {
        type: Date,
    },
    file: {
        type: String,
    },
    desc:{
        type: String
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;