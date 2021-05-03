import React, { Fragment, useState } from 'react';

const TempStepCounter = () => {
	const [steps1, setSteps1] = useState('');
	// const [steps2, setSteps2] = useState('');
	// const [steps3, setSteps3] = useState('');

	const onSubmitForm = async (e) => {
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
				<form className="d-flex mt-5" onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control"
						value={steps1}
						onChange={(e) => setSteps1(e.target.value)}
					/>
					<button className="btn btn-success">Tilføj</button>
				</form>
			</div>
		</Fragment>
	);
};

export default TempStepCounter;
