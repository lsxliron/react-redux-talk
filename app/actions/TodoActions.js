export const ADD_TODO = "ADD_TODO"
export const CHANGE_STATUS = "CHANGE_STATUS"

// Action creator to add a todo item
export function addTodo(todoText){
  return {type:ADD_TODO, text:todoText}
}
// Action creator to change todo item status
export function changeStatus(id){
  return {type:CHANGE_STATUS, id:id}
}