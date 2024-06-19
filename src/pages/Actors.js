import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/actors")
      .then(response => response.json())
      .then(data => setActors(data));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        {actors.map(actor => (
          <article key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
