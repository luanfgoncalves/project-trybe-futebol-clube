import * as bcrypt from 'bcryptjs';
import User from '../database/models/userModel';
import createToken from '../Middlewares/jwtAuthentication';

type Login = {
  email:string,
  password:string,
};

type ResType = {
  type?:'USER_NOT_FOUND',
  token?:string,
}

const authenticateToken = async ({ email, password }:Login): Promise<ResType> => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) return { type: 'USER_NOT_FOUND' };

  // compareSync https://snyk.io/advisor/npm-package/bcrypt/functions/bcrypt.compareSync
  const isPassEqual = bcrypt.compareSync(password, user.password);

  if (!isPassEqual) return { type: 'USER_NOT_FOUND' };

  const tokenCreated = createToken(email);
  return {token: tokenCreated };
};

export default authenticateToken;
