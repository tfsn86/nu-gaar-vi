import { Fragment, useState } from 'react';

import { toast } from 'react-toastify';

const ForgotPassword = () => {
	const [inputs, setInputs] = useState({
		email: '',
	});

	const { email } = inputs;

	const onChange = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email };

			// eslint-disable-next-line no-unused-vars
			const response = await fetch('/auth/forgot-password', {
				method: 'PATCH',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			if (
				parseRes === 'Mail med mulighed for nulstilling af kodeord er afsendt'
			) {
				toast.success(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<div className="container">
				<form className="mt-5" onSubmit={onSubmitForm}>
					<div className="form-group">
						<label htmlFor="email" className="font-weight-bolder">
							Indtast din email for at få sendt en mail med et link, hvor du har
							mulighed for at angive et nyt kodeord
						</label>
						<input
							type="text"
							name="email"
							value={email}
							onChange={(e) => onChange(e)}
							className="form-control"
						/>
					</div>
					<div className="text-center mt-4">
						<button type="submit" className="btn btn-primary">
							Send link
						</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default ForgotPassword;
