import * as express from 'express';
import { OpenMarketCapService } from '../../services';
import { CoinMarketCapService } from '../../services';

class MarketController {
    public path = '/market';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        const { path, router, ...x } = this;
        router.get(`${path}/omc`, x.omc);
        router.get(`${path}/cmc`, x.cmc);
        router.get(`${path}/cmcEdited`, x.cmcEdited);
    }

    omc = async (req: express.Request, res: express.Response) => {
        try {
            const omc = new OpenMarketCapService();
            const tokens = await omc.getTopTenTokens(10);
            res.json(tokens);
        } catch (error) {
            throw new Error('OpenMarketCap');
        }
    };

    cmc = async (req: express.Request, res: express.Response) => {
        try {
            const cmc = new CoinMarketCapService();
            const tokens = await cmc.getTopTenTokens(10, 'USD');
            res.json(tokens);
        } catch (error) {
            throw new Error('CoinMarketCap');
        }
    };

    cmcEdited = async (req: express.Request, res: express.Response) => {
        try {
            const cmc = new CoinMarketCapService();
            const tokens = await cmc.getTopTenTokens(10, 'USD');

            const query = (x: any) => {
                return {
                    symbol: x.symbol,
                    name: x.name,
                    rank: x.cmc_rank,
                    price: x.quote.USD.price.toFixed(2) || null
                };
            };

            const payload = [...tokens.data].map(query);

            res.json(payload);
        } catch (error) {
            throw new Error('CoinMarketCap');
        }
    };
}

export default MarketController;
