// usePopularMovies.ts
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../../core/utils/api/get-popular-movies";
import { PopularMovies } from "../../../core/utils/types/PopularMovies";

export function usePopularMovies() {
  const [popularMovies, setPopularMovies] = useState<PopularMovies[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return { popularMovies, loading };
}
