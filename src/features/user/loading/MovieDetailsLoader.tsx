const MovieDetailsLoader = () => {
  return (
    <div className="p-6 md:p-12 min-h-screen flex flex-col gap-6 animate-pulse bg-[#121212] text-gray-700">
      {/* Poster and Title */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left - Poster */}
        <div className="w-full md:w-1/2 h-96 md:h-[600px] bg-[#1E1E1E] rounded-xl shadow-md"></div>

        {/* Right - Movie Details */}
        <div className="flex-1 space-y-4">
          <div className="h-8 w-3/4 bg-[#292929] rounded"></div>
          <div className="h-6 w-1/2 bg-[#292929] rounded"></div>
          <div className="h-4 w-1/4 bg-[#3A3A3A] rounded"></div>

          {/* Overview */}
          <div className="h-20 bg-[#292929] rounded"></div>

          {/* Genres */}
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-[#292929] rounded-full"></div>
            <div className="h-6 w-16 bg-[#292929] rounded-full"></div>
            <div className="h-6 w-24 bg-[#292929] rounded-full"></div>
          </div>

          {/* Favorite Button */}
          <div className="h-10 w-56 bg-[#292929] rounded"></div>
        </div>
      </div>

      {/* Related Movies */}
      <div>
        <div className="h-8 w-40 bg-[#292929] rounded mb-4"></div>
        <div className="flex gap-4 overflow-hidden">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="w-40 h-60 bg-[#1E1E1E] rounded-lg shadow-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsLoader;
