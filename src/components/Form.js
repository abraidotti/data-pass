import React from 'react';

class Form extends React.Component {
 constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 componentDidMount(){
   console.log("on Form mount, props: ", this.props)
 }

 handleChange(event) {
   console.log("setting state on change: ", event.target.value)
   this.setState({ value: event.target.value});
 }

 handleSubmit(event) {
   console.log("state on submit: ", this.state.value);
   this.props.sendDataUp(this.state.value);
   event.preventDefault();
 }

 render() {
   return (
    <>
     <form onSubmit={this.handleSubmit}>
       <input
         type="text"
         value={this.state.value}
         onChange={this.handleChange} />
       <input
        type="submit"
        value="Submit" />
     </form>
    <h1 style={{ textAlign: "center" }}>{this.state.value}</h1>
     </>
   );
 }
}

export default Form;
