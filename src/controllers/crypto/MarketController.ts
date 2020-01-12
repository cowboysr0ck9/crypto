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
            const data = await omc.getTopTenTokens(10);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: 'Failed Open Market Cap' });
        }
    };

    cmc = async (req: express.Request, res: express.Response) => {
        try {
            const cmc = new CoinMarketCapService();
            const data = await cmc.getTopTenTokens(10, 'USD');
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: 'Failed CMC API Call' });
        }
    };

    cmcEdited = async (req: express.Request, res: express.Response) => {
        try {
            const cmc = new CoinMarketCapService();
            const tokens = await cmc.getTopTenTokens(10, 'USD');

            const query = (x: any) => {
                const { symbol, name, cmc_rank: rank, quote } = x;
                return {
                    name,
                    symbol,
                    rank,
                    price: quote.USD.price.toFixed(2) || null
                };
            };

            const data = [...tokens.data].map(query);

            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: 'Failed CMC Top 10' });
        }
    };
}

export default MarketController;
