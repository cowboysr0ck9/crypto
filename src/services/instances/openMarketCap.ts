import axios, { AxiosInstance } from 'axios';

const openMarketCap: AxiosInstance = axios.create({
    baseURL: 'http://api.openmarketcap.com/api/v1'
});

export default openMarketCap;
