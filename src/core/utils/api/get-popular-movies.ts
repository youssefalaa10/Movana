import axiosInstance from "./axios_config";

export const getPopularMovies = async () => {
    try{
        const response = await axiosInstance.get('/movie/popular', {
            params: {
                include_adult: false,
                language: 'en-US',
                page: 1,
            },
        });

        return response.data;
    }catch(error){
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}