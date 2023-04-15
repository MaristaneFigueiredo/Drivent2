import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
import {PaymentInput} from '@/protocols'
import paymentsService from '@/services/payments-service';

async function createPaymentProcess(req: AuthenticatedRequest, res: Response) {
  //export async function createPaymentProcess(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  // const ticketTypeId = Number(req.body.ticketTypeId);
  // const userId = req.userId;
  // try {
  //   const ticket = await paymentsService.createTiket(ticketTypeId, userId);
  //   return res.status(httpStatus.CREATED).send(ticket);
  // } catch (error) {
  //   console.error(error);
  //   //return res.send(httpStatus.NOT_FOUND);
  //   //next(error)
  //   switch (error.name) {
  //     case 'notFoundError':
  //       //return res.sendStatus(httpStatus.NO_CONTENT);
  //       return res.sendStatus(httpStatus.NOT_FOUND);
  //       break;
  //       cledefault: return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  //       break;
  //   }
  // }

  try {   
    
    const userId = Number(req.userId)
    
    const { ticketId, cardData} = req.body as PaymentInput

/*     console.log(' ticketId ', ticketId)          
    console.log(' cardData ', cardData)     */
    
    if (!ticketId || !cardData) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    
    const paymentTicket = await paymentsService.createPaymentProcess(userId,{ticketId, cardData})
    
    return res.status(httpStatus.OK).send(paymentTicket)
  } catch (error) {
    switch (error.name) {
      case 'notFoundError':
        return res.sendStatus(httpStatus.NOT_FOUND);
      case 'requestError':
        return res.sendStatus(httpStatus.BAD_REQUEST);
      case 'unauthorizedError':
        return res.sendStatus(httpStatus.UNAUTHORIZED);
      default:
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
}

export async function getPaymentsProcess(req: AuthenticatedRequest, res: Response) {}

export default {
  createPaymentProcess,
  getPaymentsProcess,
};
