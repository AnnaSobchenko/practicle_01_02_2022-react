import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
import { getTransactions } from "./redux/transactions/transactionsOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <Container>
    {/* <div className="App"> */}
      <Switch>
        <Route path="/transactions/:transType">
          <TransactionListPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    {/* </div> */}
    </Container>
  );
};

export default App;