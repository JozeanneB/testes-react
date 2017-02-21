import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counter from './reducers/counter'
//import AppleApp from './components/AppleApp'

const store = createStore(counter);

//React Redux component called <Provider>
//to magically make the store available to all container components in the application without passing it explicitly

//ReactDOM.render(reactElement, domContainerNode)
ReactDOM.render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById('root')
);