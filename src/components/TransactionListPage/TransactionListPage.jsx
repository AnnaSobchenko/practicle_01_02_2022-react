import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({ changePage, transType, transactions }) => {
  return (
    <>
      <h1>TransactionListPage</h1>
      <TransactionList transactions={transactions} />
      <button
        onClick={() => {
          changePage("main");
        }}
        type="button"
      >
        Back
      </button>
    </>
  );
};

export default TransactionListPage;
