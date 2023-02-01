import * as express from 'express';
// import loginAuth, { tokenValidation } from '../controllers/userController';
// import loginValidation from '../Middlewares/loginValidation';
import getTeams from '../controllers/teamsController';

const teamsRouter = express.Router();

// Rotas:
teamsRouter.get('/', getTeams);

export default teamsRouter;
