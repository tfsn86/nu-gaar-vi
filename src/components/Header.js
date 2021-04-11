import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			{/* Navigation bar */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<li className="navbar-brand">
						<NavLink className="navbar-brand" to="/">
							{' '}
							Vi går sammen
						</NavLink>
					</li>
					<div className="ml-auto">
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
								<li>
									<NavLink className="nav-link" to="/about">
										Om
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="/signin">
										Log ind
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link" to="signup">
										Tilmeld
									</NavLink>
								</li>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* Jumbotron */}
			<div className="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div className="container text-sm-center pt-5">
					<h1 className="display-4">Nu går vi et skridt ad gangen</h1>
				</div>
			</div>
		</>
	);
}

export default Header;
