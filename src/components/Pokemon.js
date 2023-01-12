import React, { useEffect, useState } from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import "./Pokemon.css";

export default function Pokemon() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    generateRandomPokemon();
  };

  const generateRandomPokemon = () => {
    const randomNumber = Math.floor(Math.random() * 906) + 1; // ensures all pokemon between 1-905 -- currently up to 905 in pokeapi
    console.log(randomNumber);
    setPokemonId(randomNumber);
  };

  const formatMoveName = (moveName) => {
    let newMoveName = moveName;
    // capitalize the first letter
    newMoveName = newMoveName.charAt(0).toUpperCase() + newMoveName.slice(1);
    if(newMoveName.includes("-")){
      // capitalize any letter after a - character
      let newMoveNameArray = newMoveName.split('-');
      // remove - character, replace with space
      let spacer;
      newMoveName == "Double-edge" ? spacer = "-" : spacer = " ";
      let cleanedUpMoveName = newMoveNameArray[0].concat(spacer, newMoveNameArray[1].charAt(0).toUpperCase() + newMoveNameArray[1].slice(1));
      newMoveName = cleanedUpMoveName;
    }
    return newMoveName;
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, [pokemonId]);

  return (
    <main>
      <p>Click button below to generate pokemon.</p>
      <button onClick={(e) => handleClick(e)}>Generate Random Pokemon</button>
      {pokemon && (
        <div>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>

          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          {pokemon.types && (
            <Stack direction="row" spacing={1}>
              {pokemon.types &&
                pokemon.types.map((type, index) => (
                  <Chip
                    key={index}
                    className={type.type.name}
                    label={type.type.name.toUpperCase()}
                  />
                ))}
            </Stack>
          )}

          {pokemon.moves && (
            <>
              <h3>Moves</h3>
              <ul>
                {pokemon.moves.map((move, index) => (
                  <li key={index}>{formatMoveName(move.move.name)} </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </main>
  );
}
