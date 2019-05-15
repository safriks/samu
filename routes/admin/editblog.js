const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")


const Content = require("../../models/Content");
const Blogpost = require("../../models/blogpost");

router.get("/", (req, res)=> {
    var objectId = mongoose.Types.ObjectId(req.query.id);
    debugger
    Blogpost.find({_id: objectId}, (err, result)=> {
        debugger
        console.log('resulttitle', result[0].title)
        res.render("admin/editblog", {blogs: result[0]})
    })
})

router.post("/", (req, res)=> {
    let updatedBlog = {
        id: req.body._id,
        title: req.body.title,
        keywords: [req.body.keywords],
        summary: req.body.summary,
        text: req.body.text,
        image: [req.body.image],
        video: [req.body.video],
        //date: req.body.date // use a datestamp
    }
    console.log(newBlog)
    Blogpost.updateOne({/* */},updatedBlog, (err)=> {
        if(err) res.send("An error has occured while updating blog post. Error message: "+err)
        else res.redirect(`/blog`)
    })
})

module.exports = router;
