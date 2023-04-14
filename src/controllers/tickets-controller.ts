import ticketsService from '@/services/tickets-service';
import { AuthenticatedRequest } from '@/middlewares';
import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
//import { TicketRequest } from '@/protocols';

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  //async function getTicketsType(req: AuthenticatedRequest, res: Response) {
  try {
    const TicketsType = await ticketsService.getTicketsType();

    return res.status(httpStatus.OK).send(TicketsType);
  } catch (error) {
    return res.send(httpStatus.NO_CONTENT);
  }
}

export async function createTiket(req: AuthenticatedRequest, res: Response) {
//export async function createTiket(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  
  const  ticketTypeId  = Number(req.body.ticketTypeId) ;

  const userId = req.userId;

  try {
    const ticket = await ticketsService.createTiket(ticketTypeId, userId);
    return res.status(httpStatus.CREATED).send(ticket);
  } catch (error) {
    //return res.send(httpStatus.NOT_FOUND);
    //next(error)
    switch(error.name) {
    case "notFoundError" : return res.sendStatus(httpStatus.NO_CONTENT); break;
    cledefault: return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR); break;
  }
}
}
// const ticketscontroller = {
//   getTicketsType,
// };

// export default ticketscontroller;
