import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../core/utils/api/get-movie-details";

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    getMovieDetails(movieId)
      .then((data) => {
        setMovie(data);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return { movieDetails, loading };
};
