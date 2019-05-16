const express = require("express")
const router = express.Router();

const Content = require("../models/Content");
const Blogpost = require("../models/blogpost")

router.get("/", (req, res)=> {
    Blogpost.find({}, (err,result)=>{
        if (err) console.log("i cant into blog"+err);
        if (!err) res.render("blog", {blogs: result});
    })
})
//!!
// routes for /a_blog_name and /blogs/a_blog_name are in home.js
//!!
module.exports = router;
