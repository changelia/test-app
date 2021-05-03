import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'

import reducers from './redux/rootReducer'

const middlewares: any = []

const enhancers = [
  applyMiddleware(...middlewares),
]

const store = createStore(
  reducers,
  compose(...enhancers),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
