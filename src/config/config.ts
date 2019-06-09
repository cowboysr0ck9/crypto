import * as dotenv from 'dotenv';
dotenv.config();

export const APP_CONFIG: any = {
    COIN_MARKET_CAP_KEY: process.env.COIN_MARKET_CAP_KEY,
    PORT: process.env.PORT
};
