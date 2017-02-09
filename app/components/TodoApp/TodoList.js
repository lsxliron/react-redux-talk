import React from 'react';
import TodoItem from './TodoItem'
import { connect } from 'react-redux'

// This class is the todo table
class TodoList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // Create an array of TodoItems from the todos array in our state
    // Your code goes here...
    
    // Render the todo table
    return(
      <table className="bordered">
        <thead>
          <tr>
            <th>Completed</th>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the todo array you created here */}
        </tbody>
      </table>
    )
  }
}

// Typechecking

// We make sure that the todo prop is an array of object with the right shape
TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    })
  )
}

// Connect Redux store to component

// This function will map our state from Redux to the component props
// That way, we never need to access this.getState() or this.setState directly
// and our state is managed exclusivly by Redux

function mapPropsToState(state){
  // Your code goes here...
}

export default connect(mapPropsToState, null)(TodoList)    