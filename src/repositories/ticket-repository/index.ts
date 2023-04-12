import { prisma } from '@/config';

async function getTicketsType() {
  return await prisma.ticketType.findMany();
}

const ticketRepository = {
  getTicketsType,
};

export default ticketRepository;
