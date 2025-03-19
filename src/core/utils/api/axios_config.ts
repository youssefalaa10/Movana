import axios from 'axios';
import { BASE_API_URL, API_KEY } from '../constants/api-constants';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
