import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getMovieDetails } from "../../../redux/slices/movieDetailsSlice";
import { getAllMovies } from "../../../redux/slices/movieSlice";
import Pagination from "./Pagination";
import {
  IMAGE_BASE_URL,
  YOUTUBE_VIDEO_URL,
} from "../../../core/utils/constants/api-constants";
import { FaStar, FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieType } from "../../../core/utils/types/MovieType";
import { MovieDetailsType } from "../../../core/utils/types/MovieDetailsType";
import { TbHeartPlus } from "react-icons/tb";
import { PiHeartBreakLight } from "react-icons/pi";
import MovieDetailsLoader from "../loading/MovieDetailsLoader";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movieId = Number(id);
  const dispatch = useDispatch();

  const { details: movieDetails, loading } = useSelector(
    (state: RootState) => state.movieDetails
  ) as { details: MovieDetailsType; loading: boolean };

  const { movies } = useSelector((state: RootState) => state.movies) as {
    movies: MovieType[];
  };

  useEffect(() => {
    dispatch(getMovieDetails(movieId) as any);
    dispatch(getAllMovies(1) as any);
  }, [dispatch, movieId]);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  if (loading || !movieDetails) return <MovieDetailsLoader />;
  return (
    <div
      className="relative text-white min-h-screen"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${movieDetails.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

      {/* Content Container */}
      <div className="relative p-6 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 pt-16">
          {/* Left - Poster with Play Button */}
          <div className="relative w-full md:w-1/2 h-96 md:h-[600px]">
            <img
              src={`${IMAGE_BASE_URL}${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
              className="w-full h-full object-cover rounded-xl shadow-lg"
              loading="lazy"
            />

            {/* Play Trailer Button */}
            {movieDetails.trailerKey && (
              <a
                href={`${YOUTUBE_VIDEO_URL}${movieDetails.trailerKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-4 bottom-4 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-md"
              >
                <FaPlay className="text-xl" />
              </a>
            )}
          </div>

          {/* Right - Movie Details */}
          <div className="flex-1 space-y-6">
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
              {new Date(movieDetails.release_date).toLocaleDateString()} •{" "}
              {Math.floor(movieDetails.runtime / 60)}h{" "}
              {movieDetails.runtime % 60}
              min • 16+
            </p>

            {/* Tabs */}
            <div className="flex gap-6 text-sm border-b border-gray-500 pb-2">
              <button className="text-white font-semibold border-b-2 border-white">
                OVERVIEW
              </button>
            </div>

            {/* Overview */}
            <p className="text-sm text-gray-300">{movieDetails.overview}</p>

            {/* Genres */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-300 font-semibold">
                Genres:
              </span>
              {movieDetails.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 text-sm text-white bg-white/10 backdrop-blur-md rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Favorite Button */}
            <div
              className={`border rounded-full border-gray-500 px-6 py-2 w-56 cursor-pointer transition-all flex items-center justify-center gap-2 
              ${isFavorite ? "bg-gray-800" : "hover:bg-gray-800"}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <PiHeartBreakLight className="h-5 w-5 text-yellow-400" />
              ) : (
                <TbHeartPlus className="h-5 w-5 text-white" />
              )}
              <span className="text-white text-sm font-medium">
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </span>
            </div>

            {/* Cast Section */}
            {movieDetails.movieCast.length > 0 ? (
              <h2 className="text-lg font-semibold mt-6">Cast</h2>
            ) : null}
            <div className="w-full max-w-4xl overflow-hidden p-2">
              {Array.isArray(movieDetails?.movieCast) &&
              movieDetails.movieCast.length > 0 ? (
                <Slider
                  className="overflow-hidden"
                  slidesToShow={6} // Shows 6 actors at a time
                  slidesToScroll={1} // Moves one at a time
                  infinite={true} // Ensures continuous loop
                  autoplay={true} // Enables auto sliding
                  autoplaySpeed={0} // Removes any delay between slides
                  speed={3000} // Smooth continuous animation speed
                  cssEase="linear" // Ensures smoothest movement
                  arrows={false} // Hides arrows for a clean look
                  pauseOnHover={false} // Prevents pausing on hover
                  draggable={false} // Stops manual dragging for smooth loop
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: { slidesToShow: 3, slidesToScroll: 1 },
                    },
                    {
                      breakpoint: 768,
                      settings: { slidesToShow: 2, slidesToScroll: 1 },
                    },
                    {
                      breakpoint: 480,
                      settings: { slidesToShow: 1, slidesToScroll: 1 },
                    },
                  ]}
                >
                  {movieDetails.movieCast
                    .filter((actor: any) => actor.profile_path) // Removes actors without images
                    .map((actor: any) => (
                      <div key={actor.id} className="text-center px-1">
                        <div className="w-16 h-16 mx-auto overflow-hidden rounded-full">
                          <img
                            src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                            alt={actor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs mt-2 font-medium text-white">
                          {actor.name}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {actor.character}
                        </p>
                      </div>
                    ))}
                </Slider>
              ) : (
                <p className="text-gray-400 text-center">No cast available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Related Movies Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 mt-8 px-24">
            Related Movies
          </h2>
          {movies.length > 0 ? (
            <div className="flex flex-wrap justify-center">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="p-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 "
                >
                  <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[250px] h-[350px] object-cover rounded-3xl shadow-md"
                  />
                  <div className="text-center mt-2">
                    <p className="text-sm font-semibold">{movie.title}</p>
                    <div className="flex items-center justify-center text-yellow-400 text-sm mt-1">
                      <FaStar />
                      <span className="ml-1 text-gray-200">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No related movies available.</p>
          )}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default MovieDetails;
