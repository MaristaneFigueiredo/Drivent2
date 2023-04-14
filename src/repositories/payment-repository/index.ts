//import { Ticket } from '@prisma/client';
import { prisma } from '@/config';
//import { TicketInput, TicketResponse } from '@/protocols';

async function createPaymentProcess() {
  // return await prisma.ticket.create({
  //   data: data,
  // });
}
const paymentRepository = {
  createPaymentProcess,
};

export default paymentRepository;
