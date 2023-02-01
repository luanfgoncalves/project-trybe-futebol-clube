import Teams from '../database/models/teamsModel';

const getAllTeams = async () => {
  const teams = await Teams.findAll();
  return teams;
};

export default getAllTeams;
