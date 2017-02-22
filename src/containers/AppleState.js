import React from 'react'
import { connect } from 'react-redux'


let AppleState = ({appleState }) => {
  return (
        <h2>And I have {appleState} apples.</h2>
  )
}

let mapStateToProps = (state) => {return { appleState: state }};
AppleState = connect(mapStateToProps)(AppleState)

export default AppleState;

