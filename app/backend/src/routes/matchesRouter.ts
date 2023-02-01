import * as express from 'express';
import tokenValidation from '../Middlewares/tokenValidation';
import { addedMatches } from '../controllers/matchesController';
// import loginAuth, { tokenValidation } from '../controllers/userController';
// import loginValidation from '../Middlewares/loginValidation';
import getMatches from '../controllers/teamsController';

const matchesRouter = express.Router();

// Rotas:
matchesRouter.get('/', getMatches);
matchesRouter.post('/', tokenValidation, addedMatches);

export default matchesRouter;
