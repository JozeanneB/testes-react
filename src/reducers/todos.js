const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_APPLE':
      return {
        id: action.id,
        number: action.number
      }
    default:
      return state
  }
}


const todos = (state = [], action) => {
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

export default todos
