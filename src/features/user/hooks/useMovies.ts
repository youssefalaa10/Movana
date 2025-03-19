import { useEffect, useState } from "react";
import { getAllMovies } from "../../../core/utils/api/get-all-movies";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data.results);
      })

      .finally(() => setLoading(false));
  }, []);

  return { movies, loading };
}
