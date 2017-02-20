/**
 * Created by jozeanne on 20/02/17.
 */
import { combineReducers } from 'redux'
import { ADD_APPLE } from '../actions/Actions'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return [
        ...state,
        {
          id: action.id,
          number: action.number
        }
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
