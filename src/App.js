import { Fragment } from 'react';
import './App.css';

function App() {
	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Nu Går Vi
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link" href="#">
							Om
						</a>
						<a className="nav-link" href="#">
							Log ind
						</a>
						<a className="nav-link" href="#">
							Tilmeld
						</a>
					</div>
				</div>
			</nav>
		</Fragment>
	);
}

export default App;
