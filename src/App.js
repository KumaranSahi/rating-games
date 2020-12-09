import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button/Button";
import GameList from "./components/GameList/GameList";

const games = {
  Fantasy: [
    {
      Game: "Witcher 3",
      Rating: "9/10"
    },
    {
      Game: "Sekiro:Shadows die twice",
      Rating: "10/10"
    },
    {
      Game: "Middle earth:Shadow of Mordor",
      Rating: "6/10"
    }
  ],
  "Open World": [
    {
      Game: "GTA 5",
      Rating: "10/10"
    },
    {
      Game: "Watch dogs",
      Rating: "5/10"
    }
  ],
  FPS: [
    {
      Game: "CS:GO",
      Rating: "8/10"
    },
    {
      Game: "Valorant",
      Rating: "9/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("");

  const genreClicked = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="App">
      <h1>🎮 Game time</h1>
      <h3>Pick a genre and I'll give you my recommendations</h3>
      {Object.keys(games).map((genre) => (
        <Button genreClicked={(genre) => genreClicked(genre)} key={genre}>
          {genre}
        </Button>
      ))}
      <hr />
      {selectedGenre.length !== 0 ? <h1>{selectedGenre}</h1> : null}
      {selectedGenre.length !== 0 ? (
        <GameList games={games[selectedGenre]} />
      ) : null}
    </div>
  );
}
