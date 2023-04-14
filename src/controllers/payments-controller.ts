import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '@/middlewares';
import httpStatus from 'http-status';
import paymentsService from '@/services/payments-service';

export async function createPaymentProcess(req: AuthenticatedRequest, res: Response) {
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
}

export async function getPaymentsProcess(req: AuthenticatedRequest, res: Response) {}

export default {
  createPaymentProcess,
  getPaymentsProcess,
};
