import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from './ipAddress';
import { storeItem } from './StorageOperations';

const API = axios.create({
  baseURL: `http://${ipAddress}:3000`,
});

API.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const user:any = await AsyncStorage.getItem('user');
        const data = {"refreshToken":user?.refreshToken}
        const response = await axios.post(`http://${ipAddress}:3000/auth/refresh`, data);

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        await storeItem(response.data)

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axios(originalRequest);
      } catch (err) {
        console.log('Refresh token expired or invalid. Logging out...');
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
