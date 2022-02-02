const TransactionForm = () => {
  return (
    <>
      <select name="transType" id="">
        <option value="incomes">Incomes</option>
        <option value="costs">Costs</option>
      </select>
      <form action="">
        <label>
          Day
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Category
          <input type="button" value="Eats" />
        </label>

        <label>Total
          <input type="text" placeholder="Insert sum" />
        </label>

        <label>Currency
          <input type="button" value="UAH" />
        </label>

        <label>
          <input type="text" placeholder="Comment"/>
        </label>
      </form>
    </>
  );
};

export default TransactionForm;
