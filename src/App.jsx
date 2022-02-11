import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

const App = () => {
  const [activePage, setActivePage] = useState("main");

  const changePage = (activePage) => setActivePage(activePage);

  return (
    <div className="App">
      {activePage === "main" && <MainPage changePage={changePage} />}
      {activePage === "incomes" && (
        <TransactionListPage changePage={changePage} transType={"incomes"} />
      )}
      {activePage === "costs" && (
        <TransactionListPage changePage={changePage} transType={"costs"} />
      )}
    </div>
  );
};

export default App;
