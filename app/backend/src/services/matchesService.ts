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

export default getAllMatches;
