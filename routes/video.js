const express = require("express")
const router = express.Router();

const Content = require("../models/Content");
const Blogpost = require("../models/blogpost")



router.get("/", (req, res)=> {

    res.render("video")

})








module.exports = router;
