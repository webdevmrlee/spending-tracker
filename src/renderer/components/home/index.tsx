import SpenderTable from './spender-table';
import CreditCardAdder from './credit-card-adder';

function Home() {
  return (
    <>
      <h1>Spend Tracker</h1>
      <SpenderTable />
      <CreditCardAdder />
    </>
  );
}

export default Home;
