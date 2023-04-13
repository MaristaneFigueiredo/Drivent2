import ticketRepository from '@/repositories/ticket-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { notFoundError } from '@/errors';
import { TicketStatus } from '@prisma/client';
import { TicketRequest } from '@/protocols';
import { BAD_REQUEST } from 'http-status';

async function getTicketsType() {
  const TicketsType = await ticketRepository.getTicketsType();
  return TicketsType;
}

async function createTiket(ticketTypeId: number, userId: number) {
  const enrollment = await enrollmentRepository.getEnrollmentByUserId(userId);

  if (!enrollment) {
    throw notFoundError;
  }

  const ticketType = await enrollmentRepository.getEnrollmentByUserId(ticketTypeId);

  if (!ticketTypeId) {
    // throw BAD_REQUEST;
    // return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  // const dataTicket: TicketRequest = {
  //   ticketTypeId: ticketTypeId,
  //   enrollmentId: enrollment.id,
  //   status: 'RESERVED',
  // };

  //console.log('dataTicket', dataTicket);
  ///const ticket = await ticketRepository.createTiket(dataTicket);
  const ticket = await ticketRepository.createTiket({
    ticketTypeId,
    enrollmentId: enrollment.id,
    status: TicketStatus.RESERVED,
  });

  //console.log('ticket =', ticket);
  // const result = {
  //   id: ticket.id,
  //   status: ticket.status, //RESERVED | PAID
  //   ticketTypeId: ticket.ticketTypeId,
  //   enrollmentId: ticket.enrollmentId,
  //   TicketType: {
  //     id: number,
  //     name: string,
  //     price: number,
  //     isRemote: boolean,
  //     includesHotel: boolean,
  //     createdAt: Date,
  //     updatedAt: Date,
  //   },
  //   createdAt: ticket.createdAt,
  //   updatedAt: ticket.updatedAt,
  // };

  return ticket;
}

const ticketsService = {
  getTicketsType,
  createTiket,
};

export default ticketsService;
