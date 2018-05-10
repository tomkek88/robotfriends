import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {robots} from './robots';
import 'tachyons';
import CardList from './CardList';

ReactDOM.render(
		<CardList robots={robots}/>	
	, document.getElementById('root'));
registerServiceWorker();
