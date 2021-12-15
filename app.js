const http = require("http");
const express = require("express");
const app = express();

let albums = [
  {
    name: "For Those That Wish to Exist",
    publishDate: "2021",
    imgURL: "/public/imgs/ForThoseThatWishToExist.jpg",

    songNames: [
      "Do You Dream of Armageddon?",
      "Black Lungs",
      "Giving Blood",
      "Discourse is Dead",
      "Dead Butterflies",
      "An Ordinary Extinction",
      "Impermanence",
      "Flight Without Feathers",
      "Little Wonder",
      "Animals",
      "Libertine",
      "Goliath",
      "Demi God",
      "Meteor",
      "Dying is Absolutely Safe",
    ],
  },
  {
    name: "All Our Gods Have Abandoned Us",
    publishDate: "2016",
    imgURL: "/public/imgs/AllOurGods.jpg",

    songNames: [
      "Nihilst",
      "Deathwish",
      "Phantom Fear",
      "Downfall",
      "Gone With The Wind",
      "The Empty Hourglass",
      "A Match Made In Heaven",
      "Gravity",
      "All Love is Lost",
      "From The Wilderness",
      "Memento Mori",
    ],
  },
];

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

// listen at port 3000
app.listen(3000, function () {
  console.log("server is listening...");
});
