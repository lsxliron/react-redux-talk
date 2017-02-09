import React from 'react';

// This is the actual Counter component
class Counter extends React.Component{
  constructor(props){
    super(props);

    // Set initial state to the counter 
    // user here you must use this.state

    // Your code goes here...

    // Bind functions to this
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)


  }

  // Set the state after the user press the + button
  add(){
    // use this.setState to assign variable to the state
    // Your code goes here ...
  }

  // Set the state after the user press the - button
  subtract(){
    // Your code goes here ...
  }

  // Render the two buttons and the text with the counter
  render(){
    // Add the onClick event to each button 
    return(
      <div>
        <div className="row">
          <div className="col s6 right-align">
            <a className="waves-effect waves-light red btn-floating btn-large" onClick={/* add event hwew... */}><i className="material-icons">remove</i></a>
          </div>
          <div  className="col s6 left-align">
            <a className="waves-effect waves-light red btn-floating btn-large" onClick={/* add event here... */}><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row center-align">
        <h4 className="browser-default">{this.props.msg} {/* Display your state to the user here */}</h4>
        </div>
      </div>
    );
  };
}

// Set default props
Counter.defaultProps = {msg: "The counter value is"}

// Typechecking
Counter.propTypes = {msg: React.PropTypes.string}


export default Counter;    