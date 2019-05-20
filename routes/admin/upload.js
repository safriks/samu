const express = require("express")
const router = express.Router();
const multer  = require('multer')

const Content = require("../../models/Content"); // [icture..]
const Blogpost = require("../../models/blogpost")

const upload = multer({dest: "../../public/images/uploads"})

router.post("/", upload.single('image'),(req, res)=> {      // "/upload"
    let newContent ={
        title: req.file.originalname,
        url: `/images/upload/${req.file.filename}`
    }
    Content.create(newContent, (err)=>{

    })

})



module.exports = router;
