import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

type UserToken = {
  email:string,
  role:string,
};

const createToken = (email:string, role:string) => {
  const payload = { email, role };
  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '15min' });
  return token;
};

const authenticateToken = (token:string) => {
  try {
    const jwtValidation = jwt.verify(token, JWT_SECRET);
    return jwtValidation;
  } catch (err) {
    return false;
  }
};

const tokenDecoder = (token:string) => {
  const decodedToken = jwt.decode(token);

  return decodedToken as UserToken;
};

export default createToken;
export { authenticateToken, tokenDecoder };
