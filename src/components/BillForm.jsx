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
          </label>
          <input
            type='text' />
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default BillForm;
