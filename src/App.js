import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store'
import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/1.)CakeContainer/CakeContainer';
import HookCakeContainer from './Components/1.)CakeContainer/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
         <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
