import React from 'react';

class BillForm extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <p> Enter your Bills: </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bill:
          <input
            type='text'
            name = 'username'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default BillForm;
