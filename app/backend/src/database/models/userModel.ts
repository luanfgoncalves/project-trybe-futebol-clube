// 1. Users:
// Colunas: id, username, role, email e password.

import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // declare <campo>: <tipo>;
  declare id:number;
  declare username:string;
  declare role:string;
  declare email:string;
  declare password:string;
}

User.init({
  // ... Campos
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  role: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
}, {
  // ... Outras configs
  underscored: true, // cria os campos em snake_case
  sequelize: db,
  tableName: 'users',
  modelName: 'users',
  timestamps: false, // Não cria os campos de referência ao tempo
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(User, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(User, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// User.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// User.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default User;
