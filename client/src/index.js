import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import reducer from './reducers/index'

const store=createStore(reducer,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={ <App /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);
