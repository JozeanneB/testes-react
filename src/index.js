import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from  './App';

import { createStore } from 'redux'
import todoApp from './reducers/Reducer'
import { Provider } from 'react-redux'
//React Redux component called <Provider>
//to magically make the store available to all container components in the application without passing it explicitly


let store = createStore(todoApp)


//ReactDOM.render(reactElement, domContainerNode)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
