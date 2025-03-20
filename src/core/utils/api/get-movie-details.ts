import axiosInstance from "./axios_config";

export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      params: {
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
