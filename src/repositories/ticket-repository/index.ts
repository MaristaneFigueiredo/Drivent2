import { prisma } from '@/config';
import { TicketRequest } from '@/protocols';

async function getTicketsType() {
  return await prisma.ticketType.findMany();
}

//{ ticketTypeId, enrollmentId: enrollment.id, status: 'RESERVED' }

//async function createTiket(dataTicket: TicketRequest) {
async function createTiket({ ticketTypeId, enrollmentId, status }: TicketRequest) {
  return await prisma.ticket.create({
    // data: {
    //   ticketTypeId: dataTicket.ticketTypeId,
    //   enrollmentId: dataTicket.enrollmentId,
    //   status: dataTicket.status,
    // },

    data: {
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollmentId,
      status: status,
    },
  });
}

const ticketRepository = {
  getTicketsType,
  createTiket,
};

export default ticketRepository;
