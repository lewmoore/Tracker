import React from 'react';
import Welcome from './Welcome';
import Income from './Income';

class App extends React.Component {
  render() {
    return (
      <div>
      <center>
        <p> Tracker </p>
        <Welcome />
        <Income />
        </center>
      </div>
    );
  }
}

export default App;
