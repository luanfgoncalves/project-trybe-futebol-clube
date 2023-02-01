// lembrar adicionar rota

import { Request, Response, NextFunction } from 'express';
import getAllTeams from '../services/teamsService';

const getTeams = async (_req: Request, res: Response, _next: NextFunction) => {
  const teams = await getAllTeams();

  return res.status(200).json(teams);
};

export default getTeams;
