import React from 'react';

class Income extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      income: '0'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      income: e.target.value
    })
  }
  render() {
    return (
      <div>
        <p> Set Income: </p>
        <input
          type='text'
          value={this.state.income}
          onChange={this.handleChange}
          />
        <p> This months income is {this.state.income} </p>
      </div>
    )
  }
}

export default Income;
