import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './s1-main/App';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </HashRouter>
);