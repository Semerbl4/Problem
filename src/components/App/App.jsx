import React from 'react';

import appStyle from './App.module.scss';

import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketList/TicketList';
import Filters from '../Filters/Filters';

import logo from '../../img/Logo.svg';

const App = () => (
  <div className={appStyle.container}>
    <header>
      <img className="logo" src={logo} alt="Авиасэйлс лого" />
    </header>
    <main>
      <Filters />
      <section className={appStyle['tickets-info']}>
        <Tabs />
        <TicketList />
        <TicketList />
      </section>
    </main>
  </div>
);

export default App;
