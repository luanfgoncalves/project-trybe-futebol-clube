import { Request, Response, NextFunction } from 'express';

const matchValidation = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res
      .status(422) // Unprocessable Entity
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  next();
};

export default matchValidation;
