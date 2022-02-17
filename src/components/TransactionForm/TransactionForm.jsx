import { useState } from "react";
import { editTransactionApi, postTransaction } from "../../api";
import CategoryList from "../CategoryList/CategoryList";
import { useTransactionsContext } from "../../context/TransactionsProvider";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import {
  addCosts,
  addIncomes,
} from "../../redux/transactions/transactionsActions";

const initialForm = {
  date: "2022-02-22",
  time: "",
  category: "eat",
  currency: "UAH",
  comment: "",
  total: "",
};

const TransactionForm = ({
  togleCategoryList,
  isOpenCategories,
  editingTransaction,
  setIsEdit,
  addIncomesProps,
  addCostsProps,
}) => {
  const history = useHistory();

  const match = useRouteMatch();
  const { editTransaction } = useTransactionsContext();
  const [form, setForm] = useState(() =>
    editingTransaction ? editingTransaction : initialForm
  );
  const [transType, setTransType] = useState("costs");

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openCategoryList = () => {
    history.push(
      match.url === "/" ? "/categories-list" : match.url + "/categories-list"
    );
  };

  const handleChangeTransType = (e) => {
    const { value } = e.target;
    setTransType(value);
  };

  const handleSubmitTrans = (e) => {
    e.preventDefault();
    if (editingTransaction) {
      console.log(form);
      editTransactionApi({ transType, transaction: form }).then((res) => {
        editTransaction(res);

        setIsEdit(false);
      });
    } else {
      postTransaction({ transType, transaction: { ...form, transType } })
        .then(
          (data) => {
            transType === "costs" && addCostsProps(data);
            transType === "incomes" && addIncomesProps(data);
          }
          // {
          //   if (transType==="costs"){
          //     addCostsProps(data)
          //   }
          //   if (transType==="incomes"){
          //     addIncomesProps(data);
          //   }
          // }
        )
        .catch((err) => console.log(err));
    }
    setForm(initialForm);
  };

  const setCategory = (newCategory) => {
    setForm((prevForm) => ({ ...prevForm, category: newCategory }));
    history.goBack();
  };

  const { date, time, category, total, currency, comment } = form;

  return (
    <Switch>
      <Route path={match.path} exact>
        <select
          name="transType"
          onChange={handleChangeTransType}
          value={transType}
        >
          <option value="incomes">Incomes</option>
          <option value="costs">Costs</option>
        </select>
        <form onSubmit={handleSubmitTrans}>
          <label>
            Day
            <input
              name="date"
              type="date"
              value={date}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Time
            <input
              name="time"
              type="time"
              value={time}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Category
            <input
              name="category"
              type="button"
              value={category}
              onClick={openCategoryList}
            />
          </label>

          <label>
            Total
            <input
              name="total"
              type="text"
              placeholder="Enter sum"
              value={total}
              onChange={handleChangeForm}
            />
          </label>

          <label>
            Currency
            <input
              name="currency"
              type="button"
              value={currency}
              onClick={null}
            />
          </label>

          <label>
            <input
              name="comment"
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={handleChangeForm}
            />
          </label>
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </Route>

      <Route
        path={
          match.path === "/"
            ? "/categories-list"
            : match.path + "/categories-list"
        }
      >
        <CategoryList
          transType={transType}
          togleCategoryList={togleCategoryList}
          setCategory={setCategory}
        />
      </Route>
    </Switch>
  );
};
const mapDispatchToProps = {
  addIncomesProps: addIncomes,
  addCostsProps: addCosts,
};

export default connect(null, mapDispatchToProps)(TransactionForm);
