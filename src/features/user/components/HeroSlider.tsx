import { useState, useEffect } from "react";
import { IMAGE_BASE_URL } from "../../../core/utils/constants/api-constants";
import { usePopularMovies } from "../hooks/usePopularMovies";

const HeroSlider = () => {
  const { popularMovies, loading } = usePopularMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!popularMovies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % popularMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [popularMovies]);

  if (loading || popularMovies.length === 0)
    return <div className="text-white text-center py-10">Loading...</div>;

  const movie = popularMovies[currentIndex];
  const bgImage = `${IMAGE_BASE_URL}${movie.backdrop_path}`;

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-8 rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Top Content */}
      <div className="relative z-10 p-6 md:p-12 max-w-2xl">
        <span className="inline-block px-3 py-1 bg-red-600 text-sm font-medium rounded-full mb-3">
          🔥 Trending Now
        </span>

        
      </div>

      {/* Bottom Left Content (absolute) */}
      <div className="absolute bottom-6 left-6 md:left-12 z-10 max-w-xl">
      <h2 className="text-3xl md:text-4xl font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-300 mt-4">
          {new Date(movie.release_date).getFullYear()} • Action • 2h
        </p>
        <p className="text-sm text-gray-300 line-clamp-3">{movie.overview}</p>

        <div className="mt-4 flex gap-4">
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
            ▶ Watch
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition">
            ⋯
          </button>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute z-10 right-4 bottom-4 flex gap-3">
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + popularMovies.length) % popularMovies.length)
          }
          className="p-2 rounded-full bg-black/50 hover:bg-white/20 transition text-white"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % popularMovies.length)}
          className="p-2 rounded-full bg-black/50 hover:bg-white/20 transition text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
