import { Request, Response, NextFunction } from 'express';
import getAllMatches from '../services/matchesService';

const getMatches = async (_req: Request, res: Response, _next: NextFunction) => {
  const matches = await getAllMatches();

  return res.status(200).json(matches);
};

export default getMatches;
