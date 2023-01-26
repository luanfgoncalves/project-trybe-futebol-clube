import { Request, Response, NextFunction } from 'express';
import authenticateToken from '../services/userService';

const authenticate = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { email, password } = req.body;

    const expectedToken = await authenticateToken({ email, password });

    return res.status(200).json({ token: expectedToken });
  } catch (err) {
    next(err);
  }
};

export default authenticate;
