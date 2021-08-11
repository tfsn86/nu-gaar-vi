import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const InputStep = ({ setStepsChange }) => {
	const [steps, setSteps] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { steps, startDate };

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
				<h1 className="text-center my-5">Indtast dato og antal skridt</h1>

				{/* Step count component */}
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					className="form-control text-center mb-3"
				/>

				<form className="d-flex " onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control"
						value={steps}
						onChange={(e) => setSteps(e.target.value)}
						placeholder="Indtast antal skridt"
					/>

					<button className="btn btn-success form-control">Tilføj</button>
				</form>
			</div>
		</Fragment>
	);
};

export default InputStep;
