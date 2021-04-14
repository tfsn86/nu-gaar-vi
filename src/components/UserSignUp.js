import { Fragment, useState } from 'react';

const UserSignUp = () => {
	const [newEmail, setNewEmail] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting email ${newEmail} and password ${newPassword}`);
	};
	return (
		<Fragment>
			<div className="container">
				<form className="mt-5" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email" className="font-weight-bolder">
							Indtast din email
						</label>

						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							value={newEmail}
							onChange={(e) => setNewEmail(e.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted">
							Din email deles ikke med andre.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="password" className="font-weight-bolder">
							Vælg et kodeord
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</div>
					<div className="text-center mt-4">
						<button type="submit" className="btn btn-primary">
							Tilmeld
						</button>
					</div>
				</form>

				<div className="mt-5 text-danger text-center">
					Test useState
					<h5>Email: {newEmail}</h5>
					<h5>Kodeord: {newPassword}</h5>
				</div>
			</div>
		</Fragment>
	);
};

export default UserSignUp;
