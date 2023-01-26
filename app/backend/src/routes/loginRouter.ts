import * as express from 'express';
import loginAuth from '../controllers/userController';
import loginValidation from '../Middlewares/loginValidation';

const loginRouter = express.Router();

// Rotas:
loginRouter.post('/', loginValidation, loginAuth);

export default loginRouter;
