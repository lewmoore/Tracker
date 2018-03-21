import React from 'react';

class BillList extends React.Component {
  render() {
    return (
      <div>
        <p> Bills: </p>
          <ul> {this.props.bills.map((bill) => <li>{bill} </li>)} </ul>
      </div>
    )
  }
}

export default BillList;
