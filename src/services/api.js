import axios from 'axios';
import Toast from 'react-native-simple-toast';

const instance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/name',
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor for globale notifications and responce log
instance.interceptors.response.use(
  (response) => {
    console.log("response: ", response);
    // const responseData = response.data;
    // Toast.show(responseData.error_text);
    // return responseData;
  },
  (error) => {
    Toast.show(t('Something went srong.'), Toast.LONG);
    return ({ data: { status: ['fail'], message: [t('Something went srong.')], data: [] } });
  }
  ,
);