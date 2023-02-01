import Teams from '../database/models/teamsModel';
import Matches from '../database/models/matchesModel';

const getAllMatches = async () => {
  const matches = await Matches.findAll({
    include: [
      {
        model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      }],
  });

  return matches;
};

const findMatches = async (inProgress:boolean) => {
  const matches = await Matches.findAll({
    where: { inProgress },
    include: [
      {
        model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
    ],
  });
  return matches;
};

export default getAllMatches;
export { findMatches };
