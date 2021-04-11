import './App.css';
import Header from './components/Header';
import TempStepCounter from './components/TempStepCounter';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<>
				<Header />
				<Switch>
					<Route exact path="/" component={TempStepCounter} />
					<Route path="/about" component={About} />
				</Switch>
			</>
		</Router>
	);
}

export default App;
