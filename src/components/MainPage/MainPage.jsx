import TransactionForm from "../TransactionForm/TransactionForm";

const MainPage = ({ changePage }) => {
  return(<>
    <TransactionForm />
    <button
      onClick={() => {
        changePage("Incomes");
      }}
      type="button"
    >
      Incomes
    </button>
    <button
      onClick={() => {
        changePage("Costs")
      }}
      type="button"
    >
      Costs
    </button>
  </>)
};

export default MainPage;
