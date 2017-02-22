import React from 'react'
import { connect } from 'react-redux'

let Apple = ({ dispatch, x }) => {
   return (
      <div>
        <h1>HelloWorld</h1>
        <h2>I have {x} apples.</h2>
        <button id="buttonAddApples" onClick={() => {
          dispatch({ type: 'ADD_APPLE' })
        }}>
          <b> Add apples </b>
        </button>
        <button id="buttonEatApples" onClick={() => {
          dispatch({ type: 'ZERO_APPLE' })
        }}>
          <b> Eat all apples </b>
        </button>
      </div>
  )
}

let mapStateToProps = (state)=>{return {x:state}};

Apple = connect(mapStateToProps )(Apple)

export default Apple;

/*
 <div>
 <h1>HelloWorld</h1>
 <h2>I have
 <em id="number"> 0 </em>
 {store.subscribe(() =>
 document.getElementById('number').innerText = " " + store.getState() + " ")}
 apples.</h2>
 <button id="buttonAddApples" onClick={() => {
 store.dispatch({ type: 'ADD_APPLE' })
 }}>
 <b> Add apples </b>
 </button>
 <button id="buttonEatApples" onClick={() => {
 store.dispatch({ type: 'ZERO_APPLE' })
 }}>
 <b> Eat all apples </b>
 </button>
 </div>
 */