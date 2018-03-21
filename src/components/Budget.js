import React from 'react';

class Budget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      budget: '0'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      budget: e.target.value
    })
  }
  render() {
    return (
      <div>
        Set Budget:
        <input
          type='text'
          value={this.state.budget}
          onChange={this.handleChange}
          />
        <p> This months budget is {this.state.budget} </p>
      </div>
    )
  }
}

export default Budget;
