import React, { useEffect, useState } from "react";

export default function Berries() {
  const [berryId, setBerryId] = useState(1);
  const [berry, setBerry] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    generateRandomBerry();
  };

  const generateRandomBerry = () => {
    const randomNumber = Math.floor(Math.random() * 66) + 1; // 65 berries
    console.log(randomNumber);
    setBerryId(randomNumber);
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/berry/${berryId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBerry(data);
      });
  }, [berryId]);

  return (
    <main>
      <p>Click button below to generate berry.</p>
      <button onClick={(e) => handleClick(e)}>Generate Random Berry</button>
      {berry && (
        <div>
          <h2>{berry.name}</h2>         
        </div>
      )}
    </main>
  );
}
