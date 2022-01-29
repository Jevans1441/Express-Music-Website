const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const server = http.createServer(app);
const db = require("./db");
const req = require("express/lib/request");

app.use(express.static("public"));
app.use(express.static("views"));

// register view engine
app.set("view engine", "ejs");
app.set("views", "views");

// ROUTES
app.get("/", (req, res) => {
  res.render("pages/index");
});

// Add's img/hyperlink/album name to albums pages
app.get("/albums", (req, res) => {
  res.render("pages/albums", {
    dataBase: db,
  });
});

app.get("/albums/:name", (req, res) => {
  let link = req.params.name;
  const album = db.find((album) => album.albumName === link); // Loops through link to match databases
  res.render("pages/albumPage", {
    name: album.name,
    releaseDate: album.publishDate,
    img: album.imgURL,
    songs: album.songNames,
  });
});

// 404 ERROR
app.use((req, res) => {
  res.status(404).render("pages/404.ejs");
});

// listen at port 3000
app.listen(port, hostname, function () {
  console.log("server is listening...");
});
