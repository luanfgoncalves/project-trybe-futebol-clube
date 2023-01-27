import * as express from 'express';
import loginAuth, { tokenValidation } from '../controllers/userController';
import loginValidation from '../Middlewares/loginValidation';

const loginRouter = express.Router();

// Rotas:
loginRouter.post('/', loginValidation, loginAuth);
loginRouter.get('/validate', tokenValidation);

export default loginRouter;
