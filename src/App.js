import React, { Component } from 'react';
import Form from './components/Form';

import { connect } from "react-redux";
import { sendDataToParent, changeBackgroundColor } from "./actions";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    dataFromChild: state.dataObjectFromChild,
    colorData: state.colorDataObjectFromChild
  };
};

const mapDispatchToProps = dispatch => ({
  sendDataToParent: (data) =>
    dispatch(sendDataToParent(data))
  });

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

    this.props.sendDataToParent("data sent to parent via props")
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
