import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './teamsModel';

class Matches extends Model {
  // declare <campo>: <tipo>;
  declare id: number;
  declare homeTeamId:number;
  declare homeTeamGoals:number;
  declare awayTeamId:number;
  declare awayTeamGoals:number;
  declare inProgress:boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: { type: DataTypes.INTEGER },
  homeTeamGoals: { type: DataTypes.INTEGER },
  awayTeamId: { type: DataTypes.INTEGER },
  awayTeamGoals: { type: DataTypes.INTEGER },
  inProgress: { type: DataTypes.BOOLEAN },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  tableName: 'matches',
  modelName: 'matches',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Matches.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'homeTeams' });
Matches.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'awayTeams' });

export default Matches;
