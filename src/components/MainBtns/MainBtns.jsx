function MainBtns({ changePage }) {
  return (
    <>
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
          changePage("Costs");
        }}
        type="button"
      >
        Costs
      </button>
    </>
  );
}

export default MainBtns;
