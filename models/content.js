const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    title: {type: String},
    type: {type: String},
    category: {type: String},
    keywords: {type: Array},
    text: {type: Array},
    url: {type: String}, // /images/balet.jpg http://google.drive..... 
    date: {type: Date} // mongoose timestamps...
})

const Content = mongoose.model("content", contentSchema);

module.exports = Content;

/*
const Content = require("../models/Content")
*/