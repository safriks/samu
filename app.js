const express = require("express")
const app = express()
const mongoose = require("mongoose")
const hbs = require('hbs');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.Cookie_Parser_Secret));  /// !!!!!!!!!!!!!!change!

mongoose.connect(process.env.Mongo_DB_Connenction, {useNewUrlParser: true}, (err)=> {
    if(!err)console.log("connected to samu db")
    else console.log("ERROR:", err)
})

const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

app.use(session({
    secret: process.env.Session_Secret,
    cookie: { maxAge: 3600000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
}));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const adminRoute = require("./routes/admin/admin");
const blogRoute = require("./routes/blog");
const photoRoute = require("./routes/photo");
const videoRoute = require("./routes/video");
const contactRoute = require("./routes/contact");

app.use("/home", homeRoute);
app.use("/about", aboutRoute);
app.use("/admin",/*auth middleware*/ adminRoute);
app.use("/blog", blogRoute);
app.use("/photo", photoRoute);
app.use("/video", videoRoute);
app.use("/contact", contactRoute);
app.use("/", homeRoute); // must be added last to render "/blog_name" AND all normal routes


//here goes auth middleware

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`samu live! listeneing on port ${port}.....`)
})