import React from 'react';
import Welcome from './Welcome';
import Income from './Income';

class App extends React.Component {
  render() {
    return (
      <div>
        <p> Tracker </p>
        <Welcome />
        <Income />
      </div>
    );
  }
}

export default App;
