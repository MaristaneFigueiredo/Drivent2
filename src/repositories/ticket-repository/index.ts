import { prisma } from '@/config';

async function getTicketsType() {
  return await prisma.ticketType.findMany();
}

async function createTiket() {
  //return await prisma.ticketType.findMany();
}

const ticketRepository = {
  getTicketsType,
  createTiket,
};

export default ticketRepository;
