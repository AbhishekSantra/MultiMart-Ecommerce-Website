import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/Store';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      closeOnClick
      theme="dark"
      />
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
