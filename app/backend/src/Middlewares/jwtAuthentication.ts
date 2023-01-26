import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

const createToken = (email:string) => {
  const payload = { email };
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

export default createToken;
export { authenticateToken };
