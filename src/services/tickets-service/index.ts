import ticketRepository from '@/repositories/ticket-repository';

async function getTicketsType() {
  const TicketsType = await ticketRepository.getTicketsType();
  return TicketsType;
}

const ticketsService = {
  getTicketsType,
};

export default ticketsService;
