import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import SingleCategory from "./components/SingleCategory";

import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieData = async () => {
    const responce = await fetch(
      "https://fortune-movies-be.vercel.app/movies",
      {
        headers: {
          "x-auth-token": "FSMovies2023",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await responce.json();
    setMovies(data);
  };

  useEffect(() => {
    getMovieData();
  }, []);
  console.log(movies);

  return (
    <div className="min-h-screen">
      <NavBar />
      {movies.length > 0 ? (
        movies.map((singleCategory) => (
          <SingleCategory category={singleCategory} key={singleCategory._id} />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
