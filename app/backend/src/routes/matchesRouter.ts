import * as express from 'express';
import tokenValidation from '../Middlewares/tokenValidation';
import getMatches, { addedMatches, finishMatch } from '../controllers/matchesController';

const matchesRouter = express.Router();

// Rotas:
matchesRouter.get('/', getMatches);
matchesRouter.post('/', tokenValidation, addedMatches);
matchesRouter.patch('/:id/finish', finishMatch);

export default matchesRouter;
