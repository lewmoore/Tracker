import React from 'react';
import BillList from './BillList';
import BillForm from './BillForm';

class BillContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      billNames: [],
      billCosts: []
    }

    this.addBillName = this.addBillName.bind(this)
    this.addBillCost = this.addBillCost.bind(this)
  }


  addBillName(billName) {
    this.state.billNames.push(billName)
  }
  
  // addBillCost(billCost) {
  //   this.state.billCosts.push(billCost)
  // }

  addBillCost(billCost) {
    this.setState((state) => ({
      bills: state.billCosts.concat([billCost])
    }))
  }

  render() {
    return (
      console.log(this.state.billCosts),
      console.log(this.state.billNames),
      <div>
        <BillForm addNewBillName={this.addBillName} addNewBillCost={this.addBillCost} />
        <BillList billNames={this.state.billNames} billCosts={this.state.billCosts} />
      </div>
    )
  }
}

export default BillContainer;
