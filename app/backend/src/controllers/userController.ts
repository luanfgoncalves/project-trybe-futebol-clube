import { Request, Response, NextFunction } from 'express';

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
    return res.status(200).json({ token: expectedToken });
  } catch (err) {
    next(err);
  }
};

export default loginAuth;
