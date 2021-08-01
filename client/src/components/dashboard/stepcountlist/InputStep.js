import React, { Fragment, useState } from 'react';

const InputStep = ({ setStepsChange }) => {
	const [steps, setSteps] = useState('');

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { steps };
			// eslint-disable-next-line
			const response = await fetch('/dashboard/steps', {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			setStepsChange(true);
			setSteps('');
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<Fragment>
			<div className="container mt-5">
				<h1 className="text-center my-5">Indtast skridt</h1>
				{/* Step count component */}
				<form className="d-flex " onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control"
						value={steps}
						onChange={(e) => setSteps(e.target.value)}
					/>
					<button className="btn btn-success">Tilføj</button>
				</form>
			</div>
		</Fragment>
	);
};

export default InputStep;
