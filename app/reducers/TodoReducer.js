import { ADD_TODO, CHANGE_STATUS } from '../actions/TodoActions'

// We set an initial state
const initialState = {
  todos: [
    {id: 0, completed: true, text: "Understand HTML"},
    {id: 1, completed: false, text: "Learn React"},
    {id: 2, completed: false, text: "Learn Redux"}
  ]
}


// This is the actual reducer
function TodoReducer(state=initialState, action){
  switch(action.type){
    case ADD_TODO:
      
      // Find the last id that we used and add 1 
      let last_id = Math.max(...state.todos.map((d)=>{return d.id}))
      
      // Create a new todo item with the previous id and uncompleted status
      let newTodo = {id: last_id+=1, text: action.text, completed: false}

      // Add the new todo to the state
      // Your code goes here...

    case CHANGE_STATUS:
      // Create a copy of the todo array
      // Your code goes here...//

      // Get the todo item to change
      // Your code goes here...

      // Change todo status
      // Your code goes here...

      // Return a new state      
      // Your code goes here...

    default:
      return state   
  }
}


export default TodoReducer