import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to TodosManager with React.
          </p>
        </header>
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
