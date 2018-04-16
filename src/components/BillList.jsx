import React from 'react';

class BillList extends React.Component {
  render() {
    return (
      <div>
        <p> Bills: </p>
          {this.props.billNames.map((bill) => { return <div key={bill}> <ul>{bill}</ul></div>})}
          {this.props.billCosts.map((bill) => { return <div key={bill}> <ul>{bill}</ul></div>})}
      </div>
    )
  }
}
BillList.defaultProps = {
  bills: []
}

export default BillList;
