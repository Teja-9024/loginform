import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateAccount from './pages/createaccount';
import AccountSetting from './pages/accountsetting';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path:'/createAccount',
    element: <CreateAccount/>
  },
  {
    path:'/accountsetting',
    element:<AccountSetting/>
  },
  {
    path:'/login',
    element:<Login/>
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
