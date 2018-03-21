import React from 'react';
import Welcome from './Welcome';
import Budget from './Budget';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Tracker </p>
        <Welcome />
        <Budget />
      </div>
    );
  }
}

export default App;
