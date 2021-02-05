import React from 'react';

import ticketListStyle from './TicketList.module.scss';

import Ticket from '../Ticket/Ticket';

const TicketList = () => (
  <ul className={ticketListStyle['ticket-list']} type="none">
    <li className={ticketListStyle['ticket-list__item']}>
      <Ticket />
    </li>
  </ul>
);

export default TicketList;
