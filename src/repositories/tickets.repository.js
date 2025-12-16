import TicketsDAO from '../dao/mongo/tickets.dao.js';

export default class TicketsRepository {
  constructor() {
    this.dao = new TicketsDAO();
  }

  createTicket = (ticket) => this.dao.create(ticket);
}
