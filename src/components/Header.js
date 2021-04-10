function Header() {
	return (
		<>
			{/* Navigation bar */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="http://ufst.dk">
						Vi går sammen
					</a>
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
								<a className="nav-link" href="http://ufst.dk">
									Om
								</a>
								<a className="nav-link" href="http://ufst.dk">
									Log ind
								</a>
								<a className="nav-link" href="http://ufst.dk">
									Tilmeld
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
