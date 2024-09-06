import SpenderTable from './spender-table';
import CreditCardAdder from './credit-card-adder';
import { Button } from 'react-bootstrap';
import React from 'react';

function Home() {
  return (
    <>
      <h1>Spend Tracker</h1>
      <SpenderTable />
      <CreditCardAdder />
      <Button variant="primary">Click me</Button>
    </>
  );
}

export default Home;
