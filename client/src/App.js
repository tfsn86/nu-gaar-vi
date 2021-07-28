import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import About from './components/About';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';

function App() {
	const checkAuthenticated = async () => {
		try {
			const res = await fetch('http://localhost:5000/auth/verify', {
				method: 'POST',
				headers: { jwt_token: localStorage.token },
			});

			const parseRes = await res.json();

			parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		checkAuthenticated();
	}, []);

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};
	return (
		<Fragment>
			<Router>
				<Header />
				<Switch>
					<Route
						exact
						path="/"
						render={(props) =>
							!isAuthenticated ? (
								<Landing {...props} />
							) : (
								<Redirect to="/dashboard" />
							)
						}
					/>
					<Route
						path="/signin"
						render={(props) =>
							!isAuthenticated ? (
								<UserSignIn {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/dashboard" />
							)
						}
					/>
					<Route
						path="/signup"
						render={(props) =>
							!isAuthenticated ? (
								<UserSignUp {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/dashboard" />
							)
						}
					/>
					<Route path="/about" render={About} />
					<Route
						path="/dashboard"
						render={(props) =>
							isAuthenticated ? (
								<Dashboard {...props} setAuth={setAuth} />
							) : (
								<Redirect to="/login" />
							)
						}
					/>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
