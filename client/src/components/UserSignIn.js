import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

const UserSignIn = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const { email, password } = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };

			const response = await fetch('/auth/login', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			const parseRes = await response.json();

			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				setAuth(true);
				toast.success('Du er nu logget ind!');
			} else {
				setAuth(false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-sm"></div>
					<div className="col-sm">
						<form className="mt-5" onSubmit={onSubmitForm}>
							<div className="form-group">
								<label htmlFor="email" className="font-weight-bolder">
									Email
								</label>
								<input
									type="text"
									name="email"
									value={email}
									onChange={(e) => onChange(e)}
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password" className="font-weight-bolder">
									Kodeord
								</label>
								<input
									type="password"
									name="password"
									value={password}
									onChange={(e) => onChange(e)}
									className="form-control"
								/>
							</div>
							<div className="text-center mt-4">
								<button type="submit" className="btn btn-primary">
									Log ind
								</button>
							</div>
							<div className="text-center mt-5">
								<Link to="/forgot-password">Glemt adgangskode?</Link>
							</div>
						</form>
					</div>
					<div className="col-sm"></div>
				</div>
			</div>
		</Fragment>
	);
};

export default UserSignIn;
