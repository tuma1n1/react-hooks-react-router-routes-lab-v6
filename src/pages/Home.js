import React, { useEffect, useState } from "react";
//import routes from "../routes.js";

import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([]);
  //const router = createMemoryRouter(routes)

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <header>
        {/* What component should go here? */}
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            id={movie.id} 
            title={movie.title}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
