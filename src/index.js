import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
        <ToastContainer /> {/* Add this line */}
    </React.StrictMode>,
    document.getElementById('root')
);
