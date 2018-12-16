import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cheese: "ham"
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.cheese}</p>
      </div>
    );
  }
}

export default App;
