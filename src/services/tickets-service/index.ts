import ticketRepository from '@/repositories/ticket-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { notFoundError, badRequestError } from '@/errors';
import { TicketStatus, TicketType } from '@prisma/client';
import { TicketInput } from '@/protocols';
import { BAD_REQUEST } from 'http-status';
import enrollmentsService from '@/services/enrollments-service';

async function getTicketsType(): Promise<TicketType[]> {
  const TicketsType = await ticketRepository.getTicketsType();
  return TicketsType;
}

async function getTicketType(ticketTypeId:number): Promise<TicketType> {
  const TicketType = await ticketRepository.getTicketType(ticketTypeId);

  if (!ticketTypeId) {
     throw badRequestError();
    // return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  return TicketType;
}


async function createTiket(ticketTypeId: number, userId: number) {  

  /* const enrollment = await enrollmentRepository.getEnrollmentByUserId(userId);
   if (!enrollment) {
    throw notFoundError;    
  } */ 

   //if (!ticketTypeId) {
    // throw BAD_REQUEST;
    // return res.sendStatus(httpStatus.BAD_REQUEST);
  //}

  const enrollment = await enrollmentsService.getEnrollmentByUserId(userId);
  const ticketType = await getTicketType(ticketTypeId); 


   const data = {
     ticketTypeId: ticketTypeId,
     enrollmentId: enrollment.id,               
     status:TicketStatus.RESERVED ,
   } as TicketInput;
   
  const ticket = await ticketRepository.createTiket(data);

  
   const ticketDetails = await ticketRepository.findTicketWithTicketTypeById(ticket.id);
   return ticketDetails
  
}

const ticketsService = {
  getTicketsType,
  createTiket,
};

export default ticketsService;
