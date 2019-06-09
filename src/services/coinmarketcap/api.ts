import coinMarketCap from '../instances/coinMarketCap';

export class CoinMarketCapService {
    async getTopTenTokens(range: number, currency: string) {
        try {
            const coins = await coinMarketCap.get('/latest', {
                params: {
                    start: 1,
                    limit: range,
                    convert: currency
                }
            });

            return coins.data;
        } catch (error) {
            throw new Error(
                `Sorry we could not retrieve all ${range} tokens from CoinMarketCap`
            );
        }
    }
}
