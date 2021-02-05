import React from 'react';

import ticketStyle from './Ticket.module.scss';

import s7Logo from '../../img/S7Logo.svg';

const Ticket = () => (
  <ul className={ticketStyle.ticket} type="none">
    <li className={ticketStyle.ticket__price}>
      <p>13 400</p>
    </li>
    <li className={ticketStyle['ticket__img-container']}>
      <img className={ticketStyle.ticket__img} src={s7Logo} alt="Логотип компании" />
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>MOW - HKT</p>
      <p className={ticketStyle['ticket-item__value']}>10:45 - 08:00</p>
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>В ПУТИ</p>
      <p className="ticket-item__value">21ч 15м</p>
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>2 ПЕРЕСАДКИ</p>
      <p className={ticketStyle['ticket-item__value']}>HKG, JNB</p>
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>MOW - HKT</p>
      <p className={ticketStyle['ticket-item__value']}>11:20 - 00:50</p>
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>В ПУТИ</p>
      <p className={ticketStyle['ticket-item__value']}>13ч 30м</p>
    </li>
    <li className={ticketStyle['ticket-item']}>
      <p className={ticketStyle['ticket-item__param']}>1 ПЕРЕСАДКА</p>
      <p className={ticketStyle['ticket-item__value']}>HKG</p>
    </li>
  </ul>
);

export default Ticket;
