const change= (state = {}, action) => {
  switch (action.type) {
    case 'ENVIAR':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'LIMPAR':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
export default change
