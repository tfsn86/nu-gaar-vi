import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Fragment>
			{/* Navigation bar */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<li className="navbar-brand">
						<NavLink className="navbar-brand" to="/">
							{' '}
							Walk
							<span role="img" aria-label="person-walking">
								🚶‍♂🚶
							</span>{' '}
							Walk
							<span role="img" aria-label="person-walking">
								🚶‍♂🚶
							</span>{' '}
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
		</Fragment>
	);
};

export default Header;
