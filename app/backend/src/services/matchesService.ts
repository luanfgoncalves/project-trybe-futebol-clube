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

type NewMatch = {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
};

const addMatches = async (newMatch:NewMatch):Promise<Matches> => {
  const match = await Matches.create({
    ...newMatch,
    inProgress: true,
  });

  return match;
};

// retorna somente matches já finalizados
const finishedMatch = async (id:string) => {
  const match = await Matches.update({ inProgress: false }, { where: { id } });

  return match;
};

export default getAllMatches;
export { findMatches, addMatches, finishedMatch };
