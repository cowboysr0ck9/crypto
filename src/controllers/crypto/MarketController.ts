import * as express from 'express';
import { OpenMarketCapService } from '../../services';
import { CoinMarketCapService } from '../../services';
import { OMC_FAILURE_MSG } from './messages';

// Initialize Services
const omc = new OpenMarketCapService();
const cmc = new CoinMarketCapService();

class MarketController {
    public path = '/market';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        const { path, router, omc, cmc } = this;
        router.get(`${path}/omc`, omc);
        router.get(`${path}/cmc`, cmc);
    }

    omc = async (req: express.Request, res: express.Response) => {
        try {
            const data = await omc.getTopTenTokens(10);
            res.status(200).json({ success: true, data });
        } catch (error) {
            res.status(400).json({ success: false, msg: OMC_FAILURE_MSG });
        }
    };

    cmc = async (req: express.Request, res: express.Response) => {
        try {
            const data = await cmc.getTopTenTokens(10, 'USD');
            res.status(200).json({ success: true, data: data.data });
        } catch (error) {
            res.status(400).json({ success: false, msg: OMC_FAILURE_MSG });
        }
    };
}

export default MarketController;
