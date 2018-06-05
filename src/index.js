import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PeopleContainer from './PeopleContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PeopleContainer/>, document.querySelector('#root'));
registerServiceWorker();
