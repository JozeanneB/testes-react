import React from 'react'
import { connect } from 'react-redux'

let AppleZero = ({ dispatch}) => {
  return (
      <div>
        <button id="buttonEatApples" onClick={() => {
          dispatch({ type: 'ZERO_APPLE' })
        }}>
          <b> Eat all apples </b>
        </button>
      </div>
  );
}

AppleZero = connect()(AppleZero)

export default AppleZero;
