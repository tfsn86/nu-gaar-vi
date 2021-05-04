import React, { Fragment, useState, useEffect } from 'react';

const TempStepCounter = () => {
	const [steps1, setSteps1] = useState('');
	const [getStepsState, setStepsState] = useState([]);

	// const [steps2, setSteps2] = useState('');
	// const [steps3, setSteps3] = useState('');

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { steps1 };
			// eslint-disable-next-line
			const response = await fetch('http://localhost:5000/steps', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			window.location = '/';
		} catch (error) {
			console.error(error.message);
		}
	};

	const getStepsFunc = async () => {
		try {
			const response = await fetch('http://localhost:5000/steps');
			const jsonData = await response.json();

			console.log(jsonData);
			setStepsState(jsonData);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getStepsFunc();
	}, []);

	return (
		<Fragment>
			{/* Jumbotron */}
			<div className="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div className="container text-sm-center pt-5">
					<h1 className="display-4 font-weight-lighter font-italic">
						Små skridt, store drømme
					</h1>
				</div>
			</div>

			<div className="container mt-5">
				<h1 className="text-center my-5">Indtast skridt</h1>
				{/* Step count component */}
				<h5>1. april</h5>
				<form className="d-flex " onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control"
						value={steps1}
						onChange={(e) => setSteps1(e.target.value)}
					/>
					<button className="btn btn-success">Tilføj</button>
				</form>

				<div className="text-danger mt-5">
					<h1>Testområde</h1>
					<div>I nedenstående hentes data fra server og database</div>
					<table className="mt-3">
						<thead></thead>
						<tbody>
							{getStepsState.map((step) => (
								<tr key={step.step_id}>
									<td>Antal skridt: {step.steps}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
};

export default TempStepCounter;
