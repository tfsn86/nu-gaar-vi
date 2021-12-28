import { Fragment, useState } from 'react';

import { toast } from 'react-toastify';

const UserSignUp = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		name: '',
	});

	const { email, password, confirmPassword, name } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });

		// Check if passwords are equal
		const password = document.querySelector('input[name=password]');
		const confirmPassword = document.querySelector(
			'input[name=confirmPassword]'
		);
		if (confirmPassword.value === password.value) {
			confirmPassword.setCustomValidity('');
		} else {
			confirmPassword.setCustomValidity('Kodeord er ikke ens!');
		}
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password, name };
			const response = await fetch('/auth/register', {
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
				toast.success('Din bruger er oprettet, og du er nu logget ind!');
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
								<div className="form-group">
									<label htmlFor="name" className="font-weight-bolder">
										Navn
									</label>
									<input
										type="text"
										name="name"
										value={name}
										onChange={(e) => onChange(e)}
										className="form-control"
									/>
								</div>
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
							<div className="form-group">
								<label htmlFor="password" className="font-weight-bolder">
									Bekræft kodeord
								</label>
								<input
									type="password"
									name="confirmPassword"
									value={confirmPassword}
									onChange={(e) => onChange(e)}
									className="form-control"
								/>
							</div>
							<div className="text-center mt-4">
								<button type="submit" className="btn btn-primary">
									Tilmeld
								</button>
							</div>
						</form>
					</div>
					<div className="col-sm"></div>
				</div>
			</div>
		</Fragment>
	);
};

export default UserSignUp;
