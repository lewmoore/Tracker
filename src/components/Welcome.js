import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'Lewis'
    }
  }

  render() {
    return (
      <div>
        Welcome to Tracker {this.state.username}
      </div>
    )
  }
}

export default Welcome;
