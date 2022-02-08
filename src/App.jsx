import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

class App extends Component {
  state = {
    activePage: "main", //main||transactionList
    costs: [],
    incomes: [],
    // transactions: [],
  };

  changePage = (activePage) => this.setState({ activePage });

  addTransaction = (newTrans) => {
    const transType=newTrans.transType;//costs/incomes
    this.setState((prevState) => ({
      [transType]: [...prevState[transType], newTrans],
    }));
  };

  // componentDidMount() {
  //   const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  //   this.setState({ transactions });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.transactions !== this.state.transactions) {
  //     localStorage.setItem(
  //       "transactions",
  //       JSON.stringify(this.state.transactions)
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        {this.state.activePage === "main" && (
          <MainPage
            changePage={this.changePage}
            addTransaction={this.addTransaction}
          />
        )}
        {this.state.activePage === "incomes" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
            transactions={this.state.incomes}
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"costs"}
            transactions={this.state.costs}
          />
        )}
      </div>
    );
  }
}

export default App;
