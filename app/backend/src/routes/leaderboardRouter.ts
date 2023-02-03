import * as express from 'express';

import homeLeaderboard from '../controllers/leaderboardController';

const leaderboardRouter = express.Router();

leaderboardRouter.get('/home', homeLeaderboard);

export default leaderboardRouter;
