import React from 'react';
import Welcome from './Welcome';
import Income from './Income';
import BillContainer from './BillContainer';

class App extends React.Component {
  render() {
    return (
      <div>
      <center>
        <p> Tracker </p>
        <Welcome />
        <Income />
        <BillContainer />
        </center>
      </div>
    );
  }
}

export default App;
