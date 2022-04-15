const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/funfact", (req, res) => {
  const funfacts = ["Mario's first appearance was in Donkey Kong",
					 "Super Mario and The Legend of Zelda were created by the same person, Shigeru Miyamoto",
					 "Tetris was developed in 1984 by Alexey Pajitnov during Soviet Union",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * funfacts.length);
  let randomFact = funfacts[randomIndex];

  res.status(200).send(randomFact);
  
});

//created variable that requires controller file
const {
  getAllVideoGames, 
  deleteVideoGame, 
  createRecomVideoGame, 
  updateVideoGame
} = require('./controller');

app.get(`/api/videogames`, getAllVideoGames)
app.delete(`/api/videogames/:id`, deleteVideoGame)
app.post(`/api/videogames`, createRecomVideoGame)
app.put(`/api/videogames/:id`, updateVideoGame)

app.listen(4000, () => console.log(`Server running on 4000`));
