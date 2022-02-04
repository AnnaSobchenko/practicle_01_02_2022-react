import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";

class App extends Component {
  state = {
    activePage: "main", //main||transactionList
  transactions:[],}

  changePage = (activePage) => this.setState({ activePage });

addTransaction=(newTrans)=>{
 this.setState(({transactions})=>({ transactions:[...transactions, newTrans]  }));
}

  render() {
    return (
      <div>
        {this.state.activePage === "main" && (
          <MainPage changePage={this.changePage} addTransaction={this.addTransaction} />
        )}
        {this.state.activePage === "Incomes" && (
          <TransactionListPage changePage={this.changePage} transType={"Incomes"} />
        )}
        {this.state.activePage === "Costs" && (
          <TransactionListPage changePage={this.changePage} transType={"Costs"} />
        )}        
      </div>
    )
  }
}

export default App;
