import { Request, Response, NextFunction } from 'express';
import getAllMatches, { findMatches, addMatches, finishedMatch } from '../services/matchesService';

const getMatches = async (req: Request, res: Response, _next: NextFunction) => {
  if (req.query.inProgress === undefined) {
    const matches = await getAllMatches();

    return res.status(200).json(matches);
  }

  const inProgress = req.query.inProgress === 'true';

  const matchesInProgress = await findMatches(inProgress);
  return res.status(200).json(matchesInProgress);
};

const addedMatches = async (req: Request, res: Response, _next: NextFunction) => {
  const matches = await addMatches(req.body);

  return res.status(201).json(matches);
};

const finishMatch = async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  await finishedMatch(id);

  return res.status(200).json({ message: 'Finished' });
};

export default getMatches;
export { addedMatches, finishMatch };
