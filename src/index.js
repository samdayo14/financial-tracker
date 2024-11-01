import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionProvider } from '../src/context/transactions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TransactionProvider>  
        <App />
      </TransactionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// Start measuring performance in your app
reportWebVitals();
