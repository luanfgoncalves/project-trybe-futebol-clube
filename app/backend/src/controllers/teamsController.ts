// lembrar adicionar rota

import { Request, Response, NextFunction } from 'express';
import getAllTeams, { getSingleTeam } from '../services/teamsService';
// import { getSingleTeam } from '../services/teamsService';

const getTeams = async (_req: Request, res: Response, _next: NextFunction) => {
  const teams = await getAllTeams();

  return res.status(200).json(teams);
};

const getTeamById = async (req: Request, res: Response, _next: NextFunction) => {
  const team = await getSingleTeam(req.params.id);

  return res.status(200).json(team);
};

export default getTeams;
export { getTeamById };
