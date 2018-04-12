import React from 'react';

class BillForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { billName: '', billCost: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBillChange = this.handleBillChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addNewBillCost(this.state.billCost)
    this.props.addNewBillName(this.state.billName)
  }

  handleBillChange(event) {
    this.setState({billName: event.target.value})
  }

  handleCostChange(event) {
    this.setState({billCost: event.target.value})
  }

  render() {
    return (
      <div>
        <p> Enter your Bills: </p>
        <form onSubmit={this.handleSubmit}>
          <label>Bill:</label>
          <input
            type='text'
            value={this.state.billName}
            onChange={this.handleBillChange}
          />
        <label>Cost:</label>
        <input
          type='text'
          value={this.state.billCost}
          onChange={this.handleCostChange}
        />
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default BillForm;
