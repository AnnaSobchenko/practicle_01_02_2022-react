import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({ changePage, transType }) => {
  return (
    <>
      <h1>TransactionListPage</h1>
      <TransactionList />
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
