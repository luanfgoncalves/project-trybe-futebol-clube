import * as express from 'express';
// import loginAuth, { tokenValidation } from '../controllers/userController';
// import loginValidation from '../Middlewares/loginValidation';
import getMatches from '../controllers/teamsController';

const matchesRouter = express.Router();

// Rotas:
matchesRouter.get('/', getMatches);

export default matchesRouter;
