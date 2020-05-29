import React from 'react';
import {Provider} from 'react-redux'
import store from './Redux/store'
import logo from './logo.svg';
import './App.css';
import CakeContainer from './Components/1.)CakeContainer/CakeContainer';
import HookCakeContainer from './Components/1.)CakeContainer/HookCakeContainer';
import IceCreamContainer from './Components/2.)IceCreamContainer/IceCreamContainer';
import NewCakeContainer from './Components/1.)CakeContainer/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer />
        <CakeContainer />
         <HookCakeContainer />
         <IceCreamContainer />
         <NewCakeContainer /> */}

         <UserContainer />
      </div>
    </Provider>
  );
}

export default App;


//npm install --save redux-devtools-extension
