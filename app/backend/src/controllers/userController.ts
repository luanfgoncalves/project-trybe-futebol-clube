import { Request, Response, NextFunction } from 'express';

import { tokenDecoder } from '../Middlewares/jwtAuthentication';
import authenticateToken from '../services/userService';

// verifica os tokens via jwt - chamado em loginRouter
const loginAuth = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, password } = req.body;

    const expectedToken = await authenticateToken({ email, password });

    // if checa a resposta o jwt
    if (expectedToken.type === 'USER_NOT_FOUND') {
      return res
        .status(401)
        .json({ message: 'Incorrect email or password' });
    }
    return res.status(200).json({ token: expectedToken.token });
  } catch (err) {
    next(err);
  }
};

const tokenValidation = (req: Request, res: Response) => {
  const token = req.headers.authorization || '';
  return res.status(200).json({ role: tokenDecoder(token).role });
};

export default loginAuth;
export { tokenValidation };
