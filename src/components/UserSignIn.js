import { Fragment, useState } from 'react';

const UserSignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting email ${email} and password ${password}`);
	};
	return (
		<Fragment>
			{/* Jumbotron */}
			<div className="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div className="container text-sm-center pt-5">
					<h1 className="display-4 font-weight-lighter font-italic">
						Vi går hele vejen
					</h1>
				</div>
			</div>
			<div className="container">
				<form className="mt-5" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email" className="font-weight-bolder">
							Email
						</label>

						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="font-weight-bolder">
							Kodeord
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="text-center mt-4">
						<button type="submit" className="btn btn-primary">
							Log ind
						</button>
					</div>
				</form>

				<div className="mt-5 text-danger text-center">
					Test useState
					<h5>Email: {email}</h5>
					<h5>Kodeord: {password}</h5>
				</div>
			</div>
		</Fragment>
	);
};

export default UserSignIn;
