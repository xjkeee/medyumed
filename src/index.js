import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Cosmetology from './containers/Cosmetology'
import Manager from './containers/Manager'
import Marketing from './containers/Marketing'
import Header from './components/Header'
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';
import { Router, IndexRoute } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
	<CookiesProvider>
		<BrowserRouter>
			<section className="app">
				<Header/>
				<Switch>
					<Route exact path="/medyumed" component={Main}/>
					<Route path="/medyumed/cosmetology" component={Cosmetology}/>
					<Route path="/medyumed/manager" component={Manager}/>
					<Route path="/medyumed/marketing" component={Marketing}/>

				</Switch>
			</section>
			</BrowserRouter>
		</CookiesProvider>
, document.getElementById('root'));
registerServiceWorker();
