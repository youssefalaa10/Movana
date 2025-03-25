import axiosInstance from "./axios_config";

export const fetchMovieDetailsApi = async (movieId: number) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      params: { language: "en-US" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};


export const fetchTrailerVideoApi = async (movieId: number) => {
  try{
    const response = await axiosInstance.get(`/movie/${movieId}/videos`, {
      params: { language: "en-US" },
    });    
    return response.data;
  }catch(error){
    console.error('Error fetching trailer video:', error);
    throw error;
  }
};

export const fetchMovieCastApi = async (movieId: number) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`, {
      params: { language: "en-US" },
    });
    
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};

