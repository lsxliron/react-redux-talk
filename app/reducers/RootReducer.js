// This file is the main reducer.
// Normally you will will have many reducers in your app
// and it is convenient6 to combine them into one reducer

import { combineReducers } from 'redux'
import  TodoReducer  from './TodoReducer'

const RootReducer = combineReducers({TodoReducer}) // you can add more reducers here

export default RootReducer

