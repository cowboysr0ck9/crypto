import * as dotenv from 'dotenv';
dotenv.config();

export const APP_CONFIG: any = {
    COIN_MARKET_CAP_KEY: process.env.COIN_MARKET_CAP_KEY,
    PORT: Number(process.env.PORT) || 5000,
};
