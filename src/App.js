import React from 'react';
import Login from './component/Login';
import './App.css';
import Hero from './component/Hero';
import Hero2 from './component/Hero2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>
				<Route path="/Hero" exact>
					<Hero />
				</Route>
				<Route path="/Hero2" exact>
					<Hero2 />
				</Route>
			</Switch>
		</Router>
	);
}; 

export default App;
