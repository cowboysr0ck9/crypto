import coinMarketCap from '../instances/coinMarketCap';

export class CoinMarketCapService {
  async getTopTenTokens(range: number, currency: string) {
    const coins = await coinMarketCap.get('/latest', {
      params: {
        start: 1,
        limit: range,
        convert: currency
      }
    });

    return coins.data;
  }
}
