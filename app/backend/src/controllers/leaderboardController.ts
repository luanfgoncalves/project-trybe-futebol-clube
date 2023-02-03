import { Request, Response, NextFunction } from 'express';
import getHomeLeaderboard from '../services/leaderboardService';

const homeLeaderboard = async (_req: Request, res: Response, _next: NextFunction) => {
  const teamMatches = await getHomeLeaderboard();
  return res.status(200).json(teamMatches);
};

export default homeLeaderboard;
