import Ticket from '../../models/ticket.model.js';

export default class TicketsDAO {
  create = (ticket) => Ticket.create(ticket);
}
