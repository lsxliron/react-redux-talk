import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/TodoActions'

// This class is one todo item.
// You can think about it as one row in the table
class TodoItem extends React.Component{
  constructor(props){
    super(props);

    // Bind functinos to this
    this.hacky = this.hacky.bind(this)
  }

  /* This is a hack that makes this particular textbox to work.
  * The reason it is here is that Materialize-css framework adds a label to the textbox 
  * and this is what fires the onChange event. If we won't fire an onChange event on the checkbox,
  * React will treat it as a read only checkbox sience we set is "checked" value as true or false.
  * You can find more information in React docs: 
  * https://facebook.github.io/react/docs/forms.html#why-controlled-components

  */
  hacky(){
    return
  }

  // Renders a todo item (one row in the table)  
  render(){
    return(
      <tr>
        <td style={{width:"20%"}}>
           <input ref={`checkbox${this.props.todo_id}`} type="checkbox" checked={this.props.completed} onChange={this.hacky} />
           <label htmlFor={`checkbox${this.props.todo_id}`} onClick={this.props.changeStatus.bind(this, this.props.todo_id)}></label>
        </td>
        <td className={this.props.completed?"todo-item-text":""} >
          {this.props.todoText}
        </td>
      </tr>
    );
  };
}

// Typechecking
TodoItem.propTypes = {
  todo_id: React.PropTypes.number.isRequired,
  todoText: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}

// Connect Redux store to component

// This function add the "changeStatus" function as a prop to the component
// and will fire changeStatus function that is defined in TodoReducer
function mapDispatchToProps(dispatch){
  return {
    changeStatus: (id)=>{dispatch(actions.changeStatus(id))}
  }
}
export default connect(null, mapDispatchToProps)(TodoItem)