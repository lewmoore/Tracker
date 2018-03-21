import React from 'react';
import BillList from './BillList';

class BillContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bills: ['Rent', 'Netflix']
    }
  }
  render() {
    return (
      <div>
        <BillList bills={this.state.bills} />
      </div>
    )
  }
}

export default BillContainer;
