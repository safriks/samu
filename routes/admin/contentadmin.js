const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")


const Content = require("../../models/Content");
const Blogpost = require("../../models/blogpost");

router.get("/content", (req, res)=> {
    var objectCategory = req.query.cat;
    Content.find({category: objectCategory}, (err, result)=> {
        res.render("admin/content", {content: result})
    })
})
/*
router.post("/", (req, res)=> {
    let updatedBlog = {
        title: req.body.title,
        path: req.body.path,
        choreographer: req.body.choreographer,
        keywords: [req.body.keywords],
        summary: req.body.summary,
        text: req.body.text,
        image: [req.body.image],
        video: [req.body.video],
        //date: req.body.date // use a datestamp
    }
    if (updatedBlog.path!==encodeURI(updatedBlog.path)) res.send("<h1>oops! bad path name!</h1><p>use only url-friendly symbols, such as letters, numbers, -, and _</p><p>press back to go back</p>");
    else{
        Blogpost.updateOne({_id: req.body._id},updatedBlog, (err)=> {
            if(err) res.send("An error has occured while updating blog post. Error message: "+err)
            else res.redirect(`/blog`)
        })
    }
})
*/
module.exports = router;
