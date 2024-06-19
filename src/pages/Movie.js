import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        {/* Movie info here! */}
        <p>Time: {movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
