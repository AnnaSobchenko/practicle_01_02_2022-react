import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

class App extends Component {
  state = {
    activePage: "main", //main||transactionList
    transactions: [],
  };

  changePage = (activePage) => this.setState({ activePage });

  addTransaction = (newTrans) => {
    this.setState(({ transactions }) => ({
      transactions: [...transactions, newTrans],
    }));
  };

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
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"costs"}
          />
        )}
      </div>
    );
  }
}

export default App;
