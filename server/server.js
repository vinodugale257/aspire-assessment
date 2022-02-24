const express = require("express");
const randomId = require("random-id");
const app = express(),
  bodyParser = require("body-parser");
port = 3070;

// place holder for the data
const cards = [
  {
    first_name: "Mark",
    last_name: "Henry",
    card_number: 1234565499992020,
    cvv: 345,
    thru: "2022-12-20",
    isDisable: false
  },
  {
    first_name: "Girish",
    last_name: "Ugale",
    card_number: 678765545678,
    cvv: 312,
    thru: "2022-02-25",
    isDisable: false
  },
  {
    first_name: "Rahul",
    last_name: "Ugale",
    card_number: 678765545678,
    cvv: 312,
    thru: "2022-02-25",
    isDisable: false
  },
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/my-app/dist"));

app.get("/api/cards", (req, res) => {
  console.log("api/cards called!!!!!!!");
  res.json(cards);
});

app.post("/api/card", (req, res) => {
  const card = req.body.card;
  card.id = randomId(10);
  console.log("Adding card:::::", card);
  cards.push(card);
  res.json(cards);
});

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/my-app/dist/index.html");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

