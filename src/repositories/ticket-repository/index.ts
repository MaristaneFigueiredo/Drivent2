import { prisma } from '@/config';
import { TicketInput, TicketResponse } from '@/protocols';
import { Ticket } from '@prisma/client';

async function getTicketsType() {
  return await prisma.ticketType.findMany();
}

async function getTicketType(ticketTypeId:number) {  
  return await prisma.ticketType.findFirst({
    where: {
      id:ticketTypeId,
    }
  });
}


async function createTiket(data: TicketInput): Promise<Ticket> {
  return await prisma.ticket.create({
    data: 
     data
    ,
  });
}

async function findTicketWithTicketTypeById(id: number):Promise<TicketResponse> {
  return prisma.ticket.findFirst({
   /*  where: { id },
    include: {
      TicketType: true,
    }, */
    where: { id },
    select: {
      id: true,
      status: true,
      ticketTypeId: true,
      enrollmentId: true,     
      TicketType: {
        select:{
        id: true,
        name: true,
        price: true,
        isRemote: true,
        includesHotel: true,
        createdAt: true,
        updatedAt: true,
        }
      },
      createdAt: true,
      updatedAt: true,      
    },
  });
}

const ticketRepository = {
  getTicketsType,
  createTiket,
  getTicketType,
  findTicketWithTicketTypeById
};

export default ticketRepository;
