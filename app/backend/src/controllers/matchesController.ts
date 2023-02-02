import { Request, Response, NextFunction } from 'express';
import getAllMatches, {
  findMatches,
  addMatches,
  finishedMatch,
  ongoingMatch,
} from '../services/matchesService';

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

  if (matches.type === 'TEAM_NOT_FOUND') {
    return res
      .status(404)
      .json({ message: 'There is no team with such id' });
  }

  return res.status(201).json(matches.match);
};

const finishMatch = async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  await finishedMatch(id);

  return res.status(200).json({ message: 'Finished' });
};

const setOngoingMatch = async (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  const result = await ongoingMatch(id, req.body);

  return res.status(200).json(result);
};

export default getMatches;
export { addedMatches, finishMatch, setOngoingMatch };
