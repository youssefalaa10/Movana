import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../../core/utils/api/get-all-movies';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
}

const MovieRow: React.FC<MovieRowProps> = ({ title }) => {
  
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      getAllMovies().then((data) => setMovies(data.results));
      
    }, []);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{title}</h3>
        <button className="text-sm text-gray-400 hover:text-white">See All</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-2">
        {movies.map((movie: any) => (
         <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;