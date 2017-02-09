import React from 'react';
import InputBox from './InputBox'
import TodoList from './TodoList'

// This is the root component of the Todo app
class TodoApp extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container">
        <h1 className="center-align"> Todo App </h1>
        <InputBox />
        <TodoList />
      </div>
    );
  };
}


export default TodoApp;    