let initialNumberApples = 2
export const addApple = () => {
  return {
    type: 'ADD_APPLE',
    number: initialNumberApples++
  }
}