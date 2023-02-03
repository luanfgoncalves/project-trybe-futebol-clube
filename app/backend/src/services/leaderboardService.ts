import * as _ from 'lodash';
import Matches from '../database/models/matchesModel';
import Teams from '../database/models/teamsModel';
import { findMatches } from './matchesService';
import getAllTeams from './teamsService';

// {
//   "name": "Santos",
//   "totalPoints": 9,
//   "totalGames": 3,
//   "totalVictories": 3,
//   "totalDraws": 0,
//   "totalLosses": 0,
//   "goalsFavor": 9,
//   "goalsOwn": 3,
//   "goalsBalance": 6,
//   "efficiency": "100.00"
// },

class HomeTeamBoard {
  private team: Teams;
  private matches: Matches[];

  constructor(team: Teams, matches: Matches[]) {
    this.team = team;
    this.matches = matches;
  }

  get name() {
    return this.team.teamName;
  }

  get totalPoints() {
    let totalPoints = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const match = this.matches[index];
      if (match.homeTeamGoals > match.awayTeamGoals) { totalPoints += 3; }
      if (match.homeTeamGoals === match.awayTeamGoals) { totalPoints += 1; }
    }

    return totalPoints;
  }

  get totalGames() { return this.matches.length; }

  get totalVictories() {
    let wins = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const victorie = this.matches[index];
      if (victorie.homeTeamGoals > victorie.awayTeamGoals) { wins += 1; }
    }

    return wins;
  }

  get totalDraws() {
    let draws = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const draw = this.matches[index];
      if (draw.homeTeamGoals === draw.awayTeamGoals) { draws += 1; }
    }
    return draws;
  }

  get totalLosses() {
    let losses = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const loss = this.matches[index];
      if (loss.homeTeamGoals < loss.awayTeamGoals) { losses += 1; }
    }

    return losses;
  }

  // gols feitos
  get goalsFavor() {
    let goals = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const match = this.matches[index];
      goals += match.homeTeamGoals;
    }

    return goals;
  }

  // gols tomados
  get goalsOwn() {
    let goals = 0;

    for (let index = 0; index < this.matches.length; index += 1) {
      const match = this.matches[index];
      goals += match.awayTeamGoals;
    }

    return goals;
  }

  // balanço de gols da partida
  get goalsBalance() {
    return this.goalsFavor - this.goalsOwn;
  }

  get efficiency() {
    return (this.totalPoints / (this.totalGames * 3)) * 100;
  }
}

const createLeaderboard = (stats:HomeTeamBoard[]) => {
  const initialStats = stats.map((element) => ({
    name: element.name,
    totalPoints: element.totalPoints,
    totalGames: element.totalGames,
    totalVictories: element.totalVictories,
    totalDraws: element.totalDraws,
    totalLosses: element.totalLosses,
    goalsFavor: element.goalsFavor,
    goalsOwn: element.goalsOwn,
    goalsBalance: element.goalsBalance,
    efficiency: element.efficiency.toFixed(2),
  }));

  return _.orderBy(
    initialStats,
    ['totalPoints', 'totalVictories', 'goalsBalance', 'goalsFavor', 'goalsOwn'],
    ['desc', 'desc', 'desc', 'desc', 'desc'],
  );
};

const getHomeLeaderboard = async () => {
  const allMatches = await findMatches(false);
  const allTeams = await getAllTeams();
  const stats:HomeTeamBoard[] = [];

  for (let index = 0; index < allTeams.length; index += 1) {
    const team = allTeams[index];
    const teamMatches = allMatches.filter((match) => match.homeTeamId === team.id);
    const stat = new HomeTeamBoard(team, teamMatches);
    stats.push(stat);
  }

  return createLeaderboard(stats);
};

// class awayTeamBoard {
//     private team: Teams;
//     private matches: Matches[];
//     constructor(team: Teams, matches: Matches[]) {
//       this.team = team;
//       this.matches = matches;
//     }
// }

export default getHomeLeaderboard;
export { HomeTeamBoard };
