import React from 'react';
import { Provider } from 'react-redux'
//import HelloWorld from './components/HelloWorld'
//import AppleApp from './components/AppleApp'
import SimpleForm from './containers/SimpleForm'
import store from './store'

//React Redux component called <Provider>
//to magically make the store available to all container components in the application without passing it explicitly

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <SimpleForm/>
        </Provider>
    );
  }
}

export default App;
