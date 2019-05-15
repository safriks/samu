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
        keywords: [req.body.keywords],
        summary: req.body.summary,
        text: req.body.text,
        image: [req.body.image],
        video: [req.body.video],
        //date: req.body.date // use a datestamp
    }
    debugger
    console.log(newBlog)
    Blogpost.create(newBlog, (err)=> {
        debugger
        if(err) res.send("An error has occured while creating blog post. Error message: "+err)
        else res.redirect(`/blog`)
    })
})

module.exports = router;
