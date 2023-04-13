import ticketRepository from '@/repositories/ticket-repository';

async function getTicketsType() {
  const TicketsType = await ticketRepository.getTicketsType();
  return TicketsType;
}

async function createTiket(ticketTypeId:number, userId:number) {

  const ticket = await ticketRepository.createTiket();
  return ticket;
}

const ticketsService = {
  getTicketsType,
  createTiket,
};

export default ticketsService;
