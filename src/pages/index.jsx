import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';

import GlobalProvider from '../context/GlobalState';

export default function Home() {
  return (
    <GlobalProvider>
      <div className="container">
        <Head>
          <title>Expense Tracker</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/style.css" />
        </Head>

        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

      </div>
    </GlobalProvider>
  );
}
