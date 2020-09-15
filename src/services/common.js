import axios from 'axios';
import Toast from 'react-native-simple-toast';
const contentTypeHeaders = { 'Content-Type': 'application/json' }

export const serviceGetCountries = (data) => axios.get(`https://restcountries.eu/rest/v2/name/${data.countryName}`,
).then(response => {
    return response.data;
});
// .catch(errors => {
//     Toast.show(errors, Toast.LONG);
// });

export const serviceGetWeather = (data) => axios.get(`http://api.weatherstack.com/current?access_key=f8d4892c0a08d5cf0be74a56f25441df&query=${data.capitalName}`,
).then(response => {
    return response.data;
});
