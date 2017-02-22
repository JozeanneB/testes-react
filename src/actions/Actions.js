export const ADD_APPLE = 'ADD_APPLE'

/*
 * action creators
 */

export function addApple(number) {
  return { type: ADD_APPLE,
           number
        }
}

export function enviar(text) {
  return { type: 'ENVIAR',
    data: text
  }
}
