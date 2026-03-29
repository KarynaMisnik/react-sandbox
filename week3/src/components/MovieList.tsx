import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export default function MovieList() {
  const { movies, toggleWatched } = useMovieStore();
  const [filterType, setFilterType] = useState<"all" | "watched" | "unwatched">(
    "all",
  );
  let filteredMovies = movies;

  if (filterType === "watched") {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === "unwatched") {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mt-2 mb-2">🎥 Movie Library</h1>
      <div className="flex gap-2 mb-4">
        <button
          className="btn-primary border-indigo-500"
          onClick={() => setFilterType("all")}
        >
          All
        </button>
        <button
          className="btn-primary border-purple-500"
          onClick={() => setFilterType("watched")}
        >
          Watched
        </button>
        <button
          className="btn-primary border-sky-500"
          onClick={() => setFilterType("unwatched")}
        >
          Unwatched
        </button>
      </div>

      {filteredMovies.map((movie) => (
        <div key={movie.id} className="flex gap-4 items-center">
          <span>{movie.title}</span>
          <button onClick={() => toggleWatched(movie.id)}>
            {movie.watched ? "✅" : "❌"}
          </button>
        </div>
      ))}
    </div>
  );
}
