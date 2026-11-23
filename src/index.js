import React from 'react';
import ReactDOM from 'react-dom/client';
// Served from our own site, not jsDelivr / Google Fonts (both unreliable or blocked in China).
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/flaticon.css';
import './css/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
