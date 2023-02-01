import * as express from 'express';
// import loginAuth, { tokenValidation } from '../controllers/userController';
// import loginValidation from '../Middlewares/loginValidation';
import getTeams from '../controllers/teamsController';

const teamsRouter = express.Router();

// Rotas:
loginRouter.get('/', getTeams);

export default teamsRouter;
