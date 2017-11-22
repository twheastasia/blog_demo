import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Rater from './view/comments'

ReactDOM.render(
  <div>
    <App />
    <Rater />
  </div>, 
  document.getElementById('root'));
registerServiceWorker();
