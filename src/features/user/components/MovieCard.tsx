import { IMAGE_BASE_URL } from "../../../core/utils/constants/api-constants";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
  }
  
  interface MovieCardProps {
    movie: Movie;
  }
  
  const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;
  
    return (
        <div className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer">
          <div className="relative">
            <img 
              src={posterUrl}
              alt={movie.title} 
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
              <div>
                <h4 className="font-bold text-sm">{movie.title}</h4>
                <p className="text-xs text-gray-300">{movie.title}</p>
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default MovieCard;