import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cheese: "ham",
      dataFromChild: "no data from child yet",
      colorData: ""
    }

    this.getDataFromChild = this.getDataFromChild.bind(this);
  }

  getDataFromChild(dataObject){
    console.log(dataObject)
    this.setState({ dataFromChild: dataObject})
  }

  render() {
    return (
      <>
        <p>{this.state.cheese}</p>
        <Form sendDataUp={this.getDataFromChild}/>
        <h1
          style={{ textAlign:"center", backgroundColor:"lightSalmon" }}
          >
          {this.state.dataFromChild}
          </h1>
      </>
    );
  }
}

export default App;
