import axios, { AxiosInstance } from 'axios';
import { APP_CONFIG } from '../../config/config';

const coinMarketCap: AxiosInstance = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings',
    headers: {
        'X-CMC_PRO_API_KEY': APP_CONFIG.COIN_MARKET_CAP_KEY
    }
});

export default coinMarketCap;
