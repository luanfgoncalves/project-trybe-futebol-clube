import * as bcrypt from 'bcryptjs';
import User from '../database/models/userModel';
import createToken from '../Middlewares/jwtAuthentication';

type Login = {
  email: string,
  password:string,
};

const authenticateToken = async ({ email, password }:Login) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) return { type: 'USER_NOT_FOUND' };

  // compareSync https://snyk.io/advisor/npm-package/bcrypt/functions/bcrypt.compareSync
  const samePassword = bcrypt.compareSync(password, user.password);

  if (!samePassword) return { type: 'USER_NOT_FOUND' };

  const tokenCreated = createToken(email);
  return tokenCreated;
};

export default authenticateToken;
