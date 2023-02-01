import * as express from 'express';
// import loginAuth, { tokenValidation } from '../controllers/userController';
// import loginValidation from '../Middlewares/loginValidation';
import getTeams, { getTeamById } from '../controllers/teamsController';

const teamsRouter = express.Router();

// Rotas:
teamsRouter.get('/', getTeams);
teamsRouter.get('/:id', getTeamById);

export default teamsRouter;
