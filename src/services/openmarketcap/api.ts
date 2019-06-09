import openMarketCap from '../instances/openMarketCap';

export class OpenMarketCapService {
    async getAllTokens() {
        try {
            const tokens = await openMarketCap.get(`/tokens`);
            return tokens.data;
        } catch (error) {
            throw new Error(`Sorry we could not retrieve all tokens.`);
        }
    }

    async getTopTenTokens(range: number) {
        try {
            const tokens = await openMarketCap.get(`/tokens?size=${range}`);
            return tokens.data;
        } catch (error) {
            throw new Error(`Sorry we could not retrieve all ${range} tokens`);
        }
    }
}
