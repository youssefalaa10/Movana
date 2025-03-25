import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setPage, getAllMovies } from "../../../redux/slices/movieSlice";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.movies
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setPage(page));
      dispatch(getAllMovies(page) as any);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className="flex justify-center mt-6"
    >
      <ul className="flex items-center justify-center text-sm list-none md:gap-1 text-slate-700">
        {/* First Page */}
        <li>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500 disabled:opacity-50"
          >
            <span className="sr-only">First</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {/* Previous Page */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500 disabled:opacity-50"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {/* Page Numbers */}
        {currentPage > 3 && (
          <>
            <li>
              <button
                onClick={() => handlePageChange(1)}
                className="hidden md:inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500"
              >
                1
              </button>
            </li>
            <li>
              <span className="hidden md:inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-slate-700">
                ...
              </span>
            </li>
          </>
        )}

        {/* Show pages around current page */}
        {Array.from({ length: 5 }, (_, i) => {
          const page = currentPage - 2 + i;
          if (page > 0 && page <= totalPages) {
            return (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`hidden md:inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded ${
                    currentPage === page
                      ? "bg-gray-500 text-white ring-offset-2 focus:bg-gray-700"
                      : "stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500"
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          }
          return null;
        })}

        {/* Last Page Indicator */}
        {currentPage < totalPages - 2 && (
          <>
            <li>
              <span className="hidden md:inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-slate-700">
                ...
              </span>
            </li>
            <li>
              <button
                onClick={() => handlePageChange(totalPages)}
                className="hidden md:inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500"
              >
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Next Page */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500 disabled:opacity-50"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>

        {/* Last Page */}
        <li>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 rounded stroke-slate-700 text-slate-700 hover:bg-gray-50 hover:text-gray-500 disabled:opacity-50"
          >
            <span className="sr-only">Last</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 -mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
