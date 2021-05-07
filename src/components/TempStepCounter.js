import React, { Fragment, useState, useEffect } from 'react';

const TempStepCounter = () => {
	const [steps, setSteps] = useState('');
	const [getStepsState, setStepsState] = useState([]);

	// const [steps2, setSteps2] = useState('');
	// const [steps3, setSteps3] = useState('');

	// Delete todo function
	const deleteStep = async (id) => {
		try {
			// eslint-disable-next-line
			const deleteTodo = await fetch(`http://localhost:5000/steps/${id}`, {
				method: 'DELETE',
			});

			setSteps(getStepsState.filter((step) => step.step_id !== id));
			window.location = '/';
		} catch (error) {
			console.error(error.message);
		}
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const body = { steps };
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
				<form className="d-flex " onSubmit={onSubmitForm}>
					<input
						type="text"
						className="form-control"
						value={steps}
						onChange={(e) => setSteps(e.target.value)}
					/>
					<button className="btn btn-success">Tilføj</button>
				</form>

				<table className="table mt-5 text-center">
					<thead>
						<tr>
							<th>Dato</th>
							<th>Skridt</th>
							<th>Rediger</th>
							<th>Slet</th>
						</tr>
					</thead>

					<tbody>
						{getStepsState.map((step) => (
							<tr key={step.step_id}>
								<td>Dato (placeholder)</td>
								<td>{step.steps}</td>
								<td>{/* <EditSteps step={step} /> */}</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => deleteStep(step.step_id)}
									>
										Slet
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fragment>
	);
};

export default TempStepCounter;
