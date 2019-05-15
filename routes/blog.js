const express = require("express")
const router = express.Router();

const Content = require("../models/Content");
const Blogpost = require("../models/blogpost")



router.get("/", (req, res)=> {
    Blogpost.find({}, (err,result)=>{
        if (err) console.log("i cant into blog"+err);
        debugger
        if (!err) res.render("blog", {blogs: result});
        debugger
    })
    

})








module.exports = router;
