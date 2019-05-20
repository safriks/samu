const express = require("express")
const router = express.Router();

const Content = require("../../models/Content");
const Blogpost = require("../../models/blogpost");

router.get("/", (req, res)=> {
    res.render("admin/addblog")
})

router.post("/", (req, res)=> {
    debugger;
    let newBlog = {
        title: req.body.title,
        path: req.body.path,
        keywords: [req.body.keywords],
        choreographer: req.body.choreographer,
        summary: req.body.summary,
        text: req.body.text,
        image: [req.body.image],
        video: [req.body.video],
        //date: req.body.date // use a datestamp
    }
    if (newBlog.path!==encodeURI(newBlog.path)) res.send("<h1>oops! bad path name!</h1><p>use only url-friendly symbols, such as letters, numbers, -, and _</p><p>press back to go back</p>");
    else{
    console.log(newBlog)
    Blogpost.create(newBlog, (err)=> {
        debugger
        if(err) res.send("An error has occured while creating blog post. Error message: "+err)
        else res.redirect(`/blog`)
    })
    }
})

module.exports = router;
