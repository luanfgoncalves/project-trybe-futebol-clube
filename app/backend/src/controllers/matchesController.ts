import { Request, Response, NextFunction } from 'express';
import getAllMatches, { findMatches } from '../services/matchesService';

const getMatches = async (req: Request, res: Response, _next: NextFunction) => {
  if (req.query.inProgress === undefined) {
    const matches = await getAllMatches();

    return res.status(200).json(matches);
  }

  const inProgress = req.query.inProgress === 'true';

  const matchesInProgress = await findMatches(inProgress);
  return res.status(200).json(matchesInProgress);
};

export default getMatches;
