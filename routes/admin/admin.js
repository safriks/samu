const express = require("express")
const router = express.Router();

const Content = require("../../models/Content");
const Blogpost = require("../../models/blogpost")

const addblogRoute = require("./addblog");
const editblogRoute = require("./editblog");

router.use("/addblog",/*auth middleware*/ addblogRoute);
router.use("/editblog",/*auth middleware*/ editblogRoute);

router.get("/", (req, res)=> {
    Blogpost.find({}, (err,result)=>{
        if (err) console.log("i cant into blog"+err);
        if (!err) res.render("admin/admin", {blogs: result});
    })
})



module.exports = router;
