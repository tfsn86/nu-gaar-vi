import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="container text-center mt-5">
			<h1>Velkommen til "Nu går vi"</h1>
			<p>
				Jeg håber, at du er klar på at gå en masse kilometer og dyste mod
				familie, venner og kollegaer!
			</p>
			<Link to="/signin" className="btn btn-primary btn-lg">
				Login
			</Link>
			<Link to="/signup" className="btn btn-primary ml-3 btn-lg">
				Opret bruger
			</Link>
		</div>
	);
};

export default Landing;
