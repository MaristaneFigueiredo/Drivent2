import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
//import { createPaymentProcess } from '@/controllers';
import paymentsController from '@/controllers/payments-controller';
//import { createUserTicketSchema } from '@/schemas/tickets-schemas';

const paymentssRouter = Router();

paymentssRouter.all('/*', authenticateToken).get('/', paymentsController.getPaymentsProcess);
paymentssRouter.post('/process', paymentsController.createPaymentProcess);
export { paymentssRouter };
