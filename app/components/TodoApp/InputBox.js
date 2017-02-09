import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/TodoActions'

class InputBox extends React.Component{
  constructor(props){
    super(props);

    // Bind functions to this
    this.getTodoText = this.getTodoText.bind(this)
  }

  // Get the value from the input box and clear its text
  getTodoText(){
      let val = this.refs.todo_input.value
      this.refs.todo_input.value = ""
      return val

  }

  // Render the input field and the submit button
  render(){
    return(
      <div className="row">
        <div className="col s9 input-field">
          <input type="text" placeholder="Please insert todo..." ref="todo_input" id="todo_input" />
          <label htmlFor="todo_input" className="active">Todo</label>
        </div>
        <div className="col s3">
        {/*Notice that we bind addItem function to the onClick event of the submit button*/}
          <a className="btn waves-effect waves-light red" onClick={this.props.addItem.bind(this, this.getTodoText)}>Submit<i className="material-icons right">send</i></a>
        </div>
      </div>
    );
  };
}

// Connect Redux store to component

// This function add the "addItem" function as a prop to the component
// and will fire addTodo function that is defined in TodoReducer
function mapDispatchToProps(dispatch){
  return {
    addItem: (text)=>{dispatch(actions.addTodo(text()))}
  }

}
export default connect(null, mapDispatchToProps)(InputBox)