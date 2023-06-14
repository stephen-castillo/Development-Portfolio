import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HEADER from './components/header/header.js';
import NAV from './components/header/navigation/nav';
import ABOUT from './components/aboutme/aboutme';
import PORFOLIO from './components/portfolio/portfolio';
import CONTACT from './components/contact/contact';
import RESUME from './components/resume/resume';
import FOOTER from './components/footer/footer.js';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HEADER />
        <NAV />
        <ABOUT />
        <PORFOLIO />
        <CONTACT />
        <RESUME />
        <FOOTER />
    </React.StrictMode>
);
//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
