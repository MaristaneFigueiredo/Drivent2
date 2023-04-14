import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketsType, createTiket } from '@/controllers';
import { createUserTicketSchema } from "@/schemas/tickets-schemas";
import { validateBody } from "@/middlewares";

//import { getTicketsType } from '@/controllers/tickets-controller';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken)
.get('/types', getTicketsType);
ticketsRouter.all('/*', authenticateToken).post('/', validateBody(createUserTicketSchema),  createTiket);
export { ticketsRouter };
