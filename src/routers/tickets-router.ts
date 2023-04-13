import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketsType, createTiket } from '@/controllers';

//import { getTicketsType } from '@/controllers/tickets-controller';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken)
.get('/types', getTicketsType);
ticketsRouter.all('/*', authenticateToken).post('/', createTiket);
export { ticketsRouter };
