import React from 'react';
import BillList from './BillList';
import AddBill from './AddBill';

class BillContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bills: [
      ]
    }

    this.addBill = this.addBill.bind(this)
  }
  addBill(bill) {
    this.setState((state) => ({
      bills: state.bills.concat([bill])
    }));
  }
  render() {
    return (
      <div>
      <AddBill addNew={this.addBill} />
        <BillList bills={this.state.bills} />
      </div>
    )
  }
}

export default BillContainer;
