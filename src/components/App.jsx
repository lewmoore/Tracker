import React from 'react';
import Welcome from './Welcome';
import Income from './Income';
import BillContainer from './BillContainer';
import BillForm from './BillForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Tracker </p>
        <Welcome />
        <Income />
        <BillForm />
      </div>
    );
  }
}

export default App;
