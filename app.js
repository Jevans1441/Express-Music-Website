const http = require("http");
const express = require("express");
const app = express();
const myClass = require("./db");

// let albums = [
//   {
//     name: "For Those That Wish to Exist",
//     publishDate: "2021",
//     imgURL: "/public/imgs/ForThoseThatWishToExist.jpg",

//     songNames: [
//       "Do You Dream of Armageddon?",
//       "Black Lungs",
//       "Giving Blood",
//       "Discourse is Dead",
//       "Dead Butterflies",
//       "An Ordinary Extinction",
//       "Impermanence",
//       "Flight Without Feathers",
//       "Little Wonder",
//       "Animals",
//       "Libertine",
//       "Goliath",
//       "Demi God",
//       "Meteor",
//       "Dying is Absolutely Safe",
//     ],
//   },
//   {
//     name: "All Our Gods Have Abandoned Us",
//     publishDate: "2016",
    // imgURL: "/public/imgs/AllOurGods.jpg",

//     songNames: [
//       "Nihilst",
//       "Deathwish",
//       "Phantom Fear",
//       "Downfall",
//       "Gone With The Wind",
//       "The Empty Hourglass",
//       "A Match Made In Heaven",
//       "Gravity",
//       "All Love is Lost",
//       "From The Wilderness",
//       "Memento Mori",
//     ],
//   },
// ];

// ROUTES
app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/albums", (req, res) => {
  res.sendFile("./public/cds.html", { root: __dirname });
});

app.get("/friends", (req, res) => {
  let htmlString = ``;
  for (let i = 0; i < myClass.length; i++) {
    let student = myClass[i];
    htmlString += `<li><a href="${student.handle}">${student.name}</a></li>`;
  }
  res.send(`<ul>${htmlString}</ul>`);
});

app.get("/friends/:handle", (req, res) => {
  const { handle } = req.params;
  const student = myClass.find((f) => f.handle === handle);
  res.send(`<h1>${student.handle}</h1>`);
});

// 404 ERROR
app.use((req, res) => {
  res.status(404).sendFile("./public/404.html", { root: __dirname });
});

// listen at port 3000
app.listen(3000, function () {
  console.log("server is listening...");
});
