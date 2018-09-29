import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import STATE from './State';

ReactDOM.render(<App weather={STATE.weather} tracks={STATE.tracks} />, document.getElementById('root'));
registerServiceWorker();
