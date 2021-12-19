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
    data1Name: db[0].name,
    data1AlbumCover: db[0].imgURL,
    data2Name: db[1].name,
    data2AlbumCover: db[1].imgURL,
  });
});

app.get("/albums/:handle", (req, res) => {
  const { handle } = req.params;
  const album = db.find((f) => f.albumName === handle);
  if (album) {
    let htmlData = ``;
    htmlData += `<h1>${album.name}</h1>`;
    htmlData += `<img src='${album.imgURL}'>`;
    htmlData += `<h4>Year: ${album.publishDate}</h4>`;
    htmlData += `<h4>Track List: ${album.songNames}</h6>`;
    res.send(htmlData);
  } else {
    res.send("Album not available");
  }
});
// 404 ERROR
app.use((req, res) => {
  res.status(404).render("404");
});

// listen at port 3000
app.listen(port, hostname, function () {
  console.log("server is listening...");
});
