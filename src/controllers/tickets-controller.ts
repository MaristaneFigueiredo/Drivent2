import ticketsService from '@/services/tickets-service';
import { AuthenticatedRequest } from '@/middlewares';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  //async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const TicketsType = await ticketsService.getTicketsType();

    return res.status(httpStatus.OK).send(TicketsType);
  } catch (error) {
    return res.send(httpStatus.NO_CONTENT);
  }
}

// const ticketscontroller = {
//   getTicketsType,
// };

// export default ticketscontroller;
