import React, { useEffect, useState } from "react";

import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/directors")
      .then(response => response.json())
      .then(data => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {/* Director info here! */}
        {directors.map(director => (
          <article key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
