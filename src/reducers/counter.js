const counter =
          (state =2, action) => {
            switch (action.type) {
              case 'ADD_APPLE':
                return state + 1;
              case 'ZERO_APPLE':
                return 0;
              default:
                return state;
            }
          }
export default counter
