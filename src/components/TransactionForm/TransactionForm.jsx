import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
  state = {
    date: "2022-02-22",
    time: "",
    category: "eats",
    currency: "UAH",
    comment: "",
    total: "",
    categoriesList: [],
  };

  handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addCategory = (newCategory) => {
    this.setState((prevState) => ({
      categoriesList: [...prevState, newCategory],
    }));
  };
  handleSubmitTrans = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { data, time, category, currency, comment, total, categoriesList } =
      this.state;
    return (
      <>
        <select name="transType" id="">
          <option value="incomes">Incomes</option>
          <option value="costs">Costs</option>
        </select>
        <form action="" onSubmit={this.handleSubmitTrans}>
          <label>
            Day
            <input
              name="date"
              type="date"
              value={data}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Time
            <input
              name="time"
              type="time"
              value={time}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Category
            <input
              name="category"
              type="button"
              value={category}
              onClick={null}
            />
          </label>

          <label>
            Total
            <input
              name="total"
              type="text"
              placeholder="Insert sum"
              value={total}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <CategoryList
          categoriesList={categoriesList}
          addCategory={this.addCategory}
        />
      </>
    );
  }
}
export default TransactionForm;
