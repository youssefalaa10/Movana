
import axiosInstance from "./axios_config";

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get('/discover/movie', {
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
