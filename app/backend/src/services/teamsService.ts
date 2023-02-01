import Teams from '../database/models/teamsModel';

const getAllTeams = async () => {
  const teams = await Teams.findAll();
  return teams;
};

const getSingleTeam = async (id:string) => {
  const team = await Teams.findOne({ where: { id } });
  return team;
};

export default getAllTeams;
export { getSingleTeam };
