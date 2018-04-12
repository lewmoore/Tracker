import React from 'react';

class BillForm extends React.Component {

  handleSubmit(){

  }

  render() {
    return (
      <div>
        <p> Enter your Bills: </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Bill:
          <input
            type='text' />
        </label>
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default BillForm;
