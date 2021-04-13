import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import TempStepCounter from './components/TempStepCounter';
import About from './components/About';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={TempStepCounter} />
				<Route path="/about" component={About} />
				<Route path="/signin" component={UserSignIn} />
				<Route path="/signup" component={UserSignUp} />
			</Switch>
		</Router>
	);
}

export default App;
