import { Component } from "react";

class TransactionListItem extends Component {
  state = {
    isOpenMenu: false,
  };

  switchMenu = () =>
    this.setState((prevState) => ({ isOpenMenu: !prevState.isOpenMenu }));
  render() {
    const { comment, currency, date, time, total } = this.props;

    return (
      <li>
        <p>{date}</p>
        <p>{time}</p>
        <p>{total}</p>
        <p>{currency}</p>
        <p>{comment}</p>

        <button onClick={this.switchMenu} type="button">
          ...
        </button>
        {this.state.isOpenMenu && (
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        )}
      </li>
    );
  }
}

export default TransactionListItem;
