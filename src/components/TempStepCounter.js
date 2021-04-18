import React, { Fragment, useState } from 'react';

const TempStepCounter = () => {
	const [steps1, setSteps1] = useState('');
	const [steps2, setSteps2] = useState('');
	const [steps3, setSteps3] = useState('');

	const onSubmitForm = (e) => {
		e.preventDefault();
		console.log('Submitting....');
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
				<form className="d-flex mb-4" onSubmit={onSubmitForm}>
					<input
						type="text"
						placeholder="Indtast skridt"
						className="form-control"
						value={steps1}
						onChange={(e) => setSteps1(e.target.value)}
					/>
					<button className="btn btn-success ml-4">Gem</button>
				</form>
				<h5>2. april</h5>
				<form className="d-flex mb-3" onSubmit={onSubmitForm}>
					<input
						type="text"
						placeholder="Indtast skridt"
						className="form-control"
						value={steps2}
						onChange={(e) => setSteps2(e.target.value)}
					/>
					<button className="btn btn-success ml-3">Gem</button>
				</form>
				<h5>3. april</h5>
				<form className="d-flex mb-4" onSubmit={onSubmitForm}>
					<input
						type="text"
						placeholder="Indtast skridt"
						className="form-control"
						value={steps3}
						onChange={(e) => setSteps3(e.target.value)}
					/>
					<button className="btn btn-success ml-3">Gem</button>
				</form>
			</div>
		</Fragment>
	);
};

export default TempStepCounter;
