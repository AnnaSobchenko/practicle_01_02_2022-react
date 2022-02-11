import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

const TransactionListPage = ({ changePage, transType }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [editingTransaction, setEditTransaction] = useState( null );

  const switchEditForm = (transaction) => {
    setIsEdit((prev) => !prev);
    setEditTransaction(transaction)
  };

  return (
    <>
      <h1>TransactionListPage</h1>
      {isEdit && <TransactionForm editingTransaction={editingTransaction} />}
      <TransactionList transType={transType} switchEditForm={switchEditForm} />
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
