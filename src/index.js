import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/create_store';
import AppContainer from './containers/app_container';
import reportWebVitals from './reportWebVitals';
import './index.css';

// ========================================================
// Render Setup
// ========================================================

const initialState = {}

const store = createStore(initialState), MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    MOUNT_NODE
  )
}

// render the application
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
