const express = require("express")
const router = express.Router();

const Content = require("../models/Content");
const Blogpost = require("../models/blogpost")


router.get("/:blog_name", (req, res)=> {
    console.log("path param at /",req.params.blog_name)
    Blogpost.find({path: req.params.blog_name}, (err,result)=>{
        if(err) console.log("error is: "+err)
        res.render("oneblog", {blogs: result[0]})
    })
})
router.get("/blog/:blog_name", (req, res)=> {
    console.log("path param at /blog",req.params.blog_name)
    Blogpost.find({path: req.params.blog_name}, (err,result)=>{
        if(err) console.log("error is: "+err)
        res.render("oneblog", {blogs: result[0]})
    })
})

router.get("/", (req, res)=> {
    res.render("home")
})










module.exports = router;
