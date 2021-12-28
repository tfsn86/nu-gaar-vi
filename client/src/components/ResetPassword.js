import { Fragment, useState } from 'react';

import { toast } from 'react-toastify';

const ResetPassword = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		newPassword: '',
		confirmPassword: '',
	});

	const { newPassword, confirmPassword } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });

		// Check if passwords are equal
		const newPassword = document.querySelector('input[name=newPassword]');
		const confirmPassword = document.querySelector(
			'input[name=confirmPassword]'
		);
		if (confirmPassword.value === newPassword.value) {
			confirmPassword.setCustomValidity('');
		} else {
			confirmPassword.setCustomValidity('Kodeord er ikke ens!');
		}
	};
	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { newPassword };

			// eslint-disable-next-line no-unused-vars
			const response = await fetch(`/auth${window.location.pathname}`, {
				method: 'PATCH',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				setAuth(true);
				toast.success('Kodeord er ændret, og du er logget ind');
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
				<div className="col-sm"></div>
				<div className="col-sm">
					<form className="mt-5" onSubmit={onSubmitForm}>
						<div className="form-group">
							<label htmlFor="password" className="font-weight-bolder">
								Kodeord
							</label>
							<input
								type="password"
								name="newPassword"
								value={newPassword}
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
								Bekræft
							</button>
						</div>
					</form>
				</div>
				<div className="col-sm"></div>
			</div>
		</Fragment>
	);
};

export default ResetPassword;
