import React from 'react';

class AddBill extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newBill: ''
    };

    this.updateNewBill = this.updateNewBill.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }

  updateNewBill(e) {
    this.setState({
      newBill: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newBill)
    this.setState({
      newBill: ''
    })
  }

  render() {
    return (
      <div>
        <input id='addBill'
          type='text'
          value={this.state.newBill}
          onChange={this.updateNewBill}
        />
        <button onClick={this.handleAddNew}> Add Bill </button>
      </div>
    )
  }
}

export default AddBill;
