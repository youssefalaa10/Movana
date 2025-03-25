import { useNavigate } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../core/utils/constants/api-constants";
import { MovieType } from "../../../core/utils/types/MovieType";
import { FaStar } from "react-icons/fa";
interface MovieCardProps {
  movie: MovieType;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      {/* Poster */}
      <div className="relative">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
          <div>
            {/* Title */}
            <h4 className="font-bold text-sm">{movie.title}</h4>
            {/* Rating */}
            <div className="flex  text-yellow-400 text-sm mt-1">
              <FaStar />
              <span className="ml-1 text-gray-200">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
