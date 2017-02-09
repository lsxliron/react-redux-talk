import React from 'react';

// This is the actual Counter component
class Counter extends React.Component{
  constructor(props){
    super(props);

    // Set initial state from the props we set or from the default prop
    this.state = {counter:this.props.initialCounter}

    // Bind functions to this
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)


  }

  // Increment counter by 1
  add(){
    let {counter} = this.state
    this.setState({counter:counter+=1})
  }

  // Bind functions to this
  subtract(){
    let {counter} = this.state
    this.setState({counter:counter-=1})
  }

  // Render the two buttons and the text with the counter
  render(){
    return(
      <div>
        <div className="row">
          <div className="col s6 right-align">
            <a className="waves-effect waves-light red btn-floating btn-large" onClick={this.subtract}><i className="material-icons">remove</i></a>
          </div>
          <div  className="col s6 left-align">
            <a className="waves-effect waves-light red btn-floating btn-large" onClick={this.add}><i className="material-icons">add</i></a>
          </div>
        </div>
        <div className="row center-align">
        <h4 className="browser-default">{this.props.msg} {this.state.counter}</h4>
        </div>
      </div>
    );
  };
}

// Set default props
Counter.defaultProps = {msg: "The counter value is", initialCounter: 0}

// Typechecking
Counter.propTypes = {msg: React.PropTypes.string, initialCounter: React.PropTypes.number}


export default Counter;    