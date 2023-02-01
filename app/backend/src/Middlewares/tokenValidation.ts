import { Request, Response, NextFunction } from 'express';
import { authenticateToken } from './jwtAuthentication';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token === undefined || token === '') {
    return res
      .status(401)
      .json({ message: 'Token not found' });
  }

  const isValid = authenticateToken(token);

  if (!isValid) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

export default tokenValidation;
