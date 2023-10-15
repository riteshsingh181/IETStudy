const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/ietnexus";
const Listing = require("C:/Users/singh/IET Study/IETStudy/models/listing.js");
const uploadListing = require("C:/Users/singh/IET Study/IETStudy/models/uploadListing.js");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));


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

app.get("/upload", (req, res)=>{
    res.render("upload.ejs");
})


app.post("/upload", async (req, res)=>{
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/material-uploaded");
    /* createListing(newListing); */
    console.log(newListing);
})

app.get("/material-uploaded", (req, res)=>{
    res.render("material-uploaded.ejs");
})

app.get("/show-material", async (req, res) =>{
    const studentListings = await Listing.find({});
    res.render("show-material.ejs", {studentListings});
})

app.get("/show-material/:id/edit", async(req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("edit.ejs", {listing});
})


app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "public")));


/* async function createListing(newListing) {
    const database = client.db('ietnexus');
    const collection = database.collection('uploadListing');
  
    try {
      const result = await collection.insertOne(newListing);
      console.log(`New listing inserted with _id: ${result.insertedId}`);
    } catch (error) {
      console.error('Error inserting listing:', error);
    }
}
   */