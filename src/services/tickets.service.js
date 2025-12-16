import Ticket from '../models/ticket.model.js';

export const createTicket = (amount, email) =>
  Ticket.create({
    code: crypto.randomUUID(),
    amount,
    purchaser: email
  });
