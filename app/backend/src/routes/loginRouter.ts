import * as express from 'express';
import authenticate from '../controllers/userController';

const loginRouter = express.Router();

// Rotas:
loginRouter.post('/', authenticate);

export default loginRouter;
