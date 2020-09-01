import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Socket from './components/Socket/Socket';
import LocalStorage from './components/LocalStorage/LocalStorage';
import Pages from './pages/Pages/Pages';
import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <Socket>
        <LocalStorage>
          <Pages/>
        </LocalStorage>
      </Socket>
    </Provider>
  );
}

export default App;
