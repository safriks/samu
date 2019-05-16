const mongoose = require("mongoose");

const blogpostSchema = new mongoose.Schema({
    title: {type: String},
    path: {type: String},
    choreographer: {type: String}, // choreographer
    status: {type: String},
    keywords: {type: Array},
    summary: {type: String},
    text: {type: String},
    image: {type: Array}, //[0] goes to thumbnail; mind the ratio too
    video: {type: Array},
    date: {type: Date}
})

const Blogpost = mongoose.model("blogs", blogpostSchema);

module.exports = Blogpost;

/*
const Blogpost = require("../models/blogpost")
*/