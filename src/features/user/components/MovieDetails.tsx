import { useParams } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { IMAGE_BASE_URL } from "../../../core/utils/constants/api-constants";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);
  const { movieDetails, loading } = useMovieDetails(movieId);

  if (loading || !movieDetails)
    return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="bg-primary text-white p-6  md:p-12 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 pt-16">
        {/* Left - Poster with Play Button */}
        <div className="relative w-full md:w-1/2 h-96 md:h-[600px]">
          <img
            src={`${IMAGE_BASE_URL}${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <button className="absolute left-4 bottom-4 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-md">
            <FaPlay className="text-xl" />
          </button>
        </div>

        {/* Right - Movie Details */}
        <div className="flex-1 space-y-6">
          {/* Title & Rating */}
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{movieDetails.title}</h1>
              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                {movieDetails.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1 text-yellow-400 text-xl">
              <FaStar />
              <span className="text-white font-semibold">
                {movieDetails.vote_average.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Metadata */}
          <p className="text-gray-400 text-sm">
            {new Date(movieDetails.release_date).getFullYear()} •{" "}
            {Math.floor(movieDetails.runtime / 60)}h {movieDetails.runtime % 60}
            min • 16+
          </p>

          {/* Tabs */}
          <div className="flex gap-6 text-sm border-b border-gray-700 pb-2">
            <button className="text-white font-semibold border-b-2 border-white">
              OVERVIEW
            </button>
            {/* <button className="text-gray-400 hover:text-white">TRAILERS & MORE</button>
            <button className="text-gray-400 hover:text-white">MORE LIKE THIS</button>
            <button className="text-gray-400 hover:text-white">DETAILS</button> */}
          </div>

          {/* Overview Text */}
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            {movieDetails.overview}
          </p>
          
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            {/* genres */}
            {`Genres: ${movieDetails.genres
              .map((genre: any) => genre.name)
              .join(", ")}`}
          </p>
          <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
            {`Country: ${movieDetails.origin_country}`}
          </p>

          <div className="border rounded-full border-gray-500 p-4 w-48 hover:bg-gray-800 cursor-pointer">
            <span className="flex gap-2">
              <MdFavoriteBorder className="h-6 w-6" />
              Add to Favorites
            </span>
          </div>
          {/* Related Movies */}
          <div>
            <h2 className="text-lg font-semibold mb-3 mt-8">Related Movies</h2>
            <div className="flex gap-4 overflow-x-auto">
              {[1, 2, 3, 4].map((_, idx) => (
                <div
                  key={idx}
                  className="w-48 h-28 bg-gray-800 rounded-lg overflow-hidden shrink-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${IMAGE_BASE_URL}${movieDetails.backdrop_path})`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
