import * as express from 'express';
import tokenValidation from '../Middlewares/tokenValidation';
import getMatches, { addedMatches, finishMatch } from '../controllers/matchesController';
import matchValidation from '../Middlewares/matchValidation';

const matchesRouter = express.Router();

// Rotas:
matchesRouter.get('/', getMatches);
matchesRouter.post('/', tokenValidation, matchValidation, addedMatches);
matchesRouter.patch('/:id/finish', finishMatch);

export default matchesRouter;
