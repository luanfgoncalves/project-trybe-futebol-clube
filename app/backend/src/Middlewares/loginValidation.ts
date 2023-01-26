import { Request, Response, NextFunction } from 'express';

// recebe os dados autenticados de user e retorna o erro
// chamado em loginRouter
const loginValidation = (req:Request, res:Response, next:NextFunction) => {
  const { email, password } = req.body;

  if (email === undefined || email === '' || password === undefined || password === '') {
    return res
      .status(400)
      .json({ message: 'All fields must be filled' });
  }

  return next();
};

export default loginValidation;
