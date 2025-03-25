import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getAllMovies } from "../../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { MovieType } from "../../../core/utils/types/MovieType";

interface MovieRowProps {
  title: string;
}

const MovieRow: React.FC<MovieRowProps> = ({ title }) => {
  const dispatch = useDispatch();
  const { movies, loading, currentPage } = useSelector(
    (state: RootState) => state.movies
  ) as {
    movies: MovieType[];
    loading: boolean;
    currentPage: number;
    totalPages: number;
  };

  useEffect(() => {
    dispatch(getAllMovies(currentPage) as any);
  }, [dispatch, currentPage]);

  if (loading) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <button className="text-sm text-gray-400 hover:text-white">
          See All
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default MovieRow;
