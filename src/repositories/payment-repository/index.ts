//import { Ticket } from '@prisma/client';
import { prisma } from '@/config';
//import { TicketInput, TicketResponse } from '@/protocols';
import {PaymentInput} from '@/protocols'



async function createPaymentProcess({ticketId, cardData}:PaymentInput, valueTicket:number) {
  const data = {
    ticketId: ticketId,
    value:valueTicket ,
    cardIssuer: cardData.issuer,
    cardLastDigits:cardData.expirationDate.toString().slice(-4)	
  } 
 
  return await prisma.payment.create({
    data: data
  }) 

}

async function getPaymentsProcess() {}


const paymentRepository = {
  createPaymentProcess,
  getPaymentsProcess
};

export default paymentRepository;
