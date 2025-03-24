import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from './ipAddress';
import { fetchData, storeItem } from './StorageOperations';
import { router } from 'expo-router';

const API = axios.create({
  baseURL: `${ipAddress}`,
});

API.interceptors.request.use(
  async (config) => {
    const token = await fetchData("user");
    if (token) {
      const accessToken = token.accessToken
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(error.config)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const user:any = await AsyncStorage.getItem('user');
        const userString = user? JSON.parse(user) : null
        const data = {"refreshToken":userString?.refreshToken}
        const response = await axios.post(`${ipAddress}/auth/refresh`, data);

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        await storeItem(response.data)

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axios(originalRequest);
      } catch (err) {
        console.log('Refresh token expired or invalid. Logging out...');
        await AsyncStorage.removeItem('user');
        router.push("/login")
      }
    }

    return Promise.reject(error);
  }
);

export default API;
