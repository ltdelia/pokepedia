import React, { useEffect, useState } from "react";

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
          <h2>{pokemon.name}</h2>

          <img src={pokemon.sprites.front_default} />

          {pokemon.types && pokemon.types.map((type) => <span key={type.slot}>{type.type.name} </span>)}
          {pokemon.moves && <ul>
              {pokemon.moves.map((move, index) => <li key={index}>{move.move.name} </li>)}
          </ul>}          
        </div>
      )}
    </main>
  );
}
