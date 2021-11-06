import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = ({ setAuth, isAuthenticated }) => {
	const logout = async (e) => {
		e.preventDefault();
		try {
			localStorage.removeItem('token');
			setAuth(false);
			toast.success('Du er nu logget ud!');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			{/* Navigation bar */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<li className="navbar-brand">
						<NavLink className="navbar-brand" to="/">
							Nu Går Vi
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
								{!isAuthenticated && (
									<li>
										<NavLink className="nav-link" to="/signin">
											Log ind
										</NavLink>
									</li>
								)}

								{!isAuthenticated && (
									<li>
										<NavLink className="nav-link" to="signup">
											Tilmeld
										</NavLink>
									</li>
								)}

								{isAuthenticated && (
									<li>
										<button
											onClick={(e) => logout(e)}
											className="btn text-white-50"
										>
											Log ud
										</button>
									</li>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default Header;
