const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/ietnexus";
const Listing = require("C:/Users/singh/IET Study/IETStudy/models/listing.js");

main()
    .then(()=>{
        console.log("connected to DB");
})
    .catch((err)=>{
        console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/home", (req, res)=>{
    res.render("home.ejs");
});

app.get("/study-material", async (req, res)=>{
    const studentListings = await Listing.find({});
    res.render("study-material.ejs", {studentListings});
})


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "public")));