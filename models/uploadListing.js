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
    type: {
        type: String,
    },
    date: {
        type: Number,
        required: true
    },
    file: {
        type: String,
        required: true
    }
})

const uploadListing = mongoose.model("uploadListing", listingSchema);
module.exports = uploadListing;