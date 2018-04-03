import React from 'react';

class BillList extends React.Component {
  render() {
    return (
      <div>
        <p> Bills: </p>
          {this.props.bills.map((bill) => { return <div key={bill}> <ul>{bill}</ul></div>})}
      </div>
    )
  }
}

export default BillList;
