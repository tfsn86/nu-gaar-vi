import React, { Fragment, useState } from 'react';

const EditStep = ({ step, setStepsChange }) => {
	const [steps, setSteps] = useState(step.steps);

	// Edit steps function
	const updateSteps = async (e) => {
		e.preventDefault();
		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { steps };
			// eslint-disable-next-line
			const response = await fetch(`/dashboard/steps/${step.step_id}`, {
				method: 'PUT',
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			setStepsChange(true);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-warning"
				data-toggle="modal"
				data-target={`#id${step.step_id}`}
			>
				Rediger
			</button>

			<div
				className="modal"
				id={`id${step.step_id}`}
				onClick={() => {
					setSteps(step.steps);
				}}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Ret indtastning</h4>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								onClick={() => {
									setSteps(step.steps);
								}}
							>
								&times;
							</button>
						</div>

						<div className="modal-body">
							<input
								type="text"
								className="form-control"
								value={steps}
								onChange={(e) => setSteps(e.target.value)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-primary"
								data-dismiss="modal"
								onClick={() => {
									setSteps(step.steps);
								}}
							>
								Luk
							</button>
							<button
								type="button"
								className="btn btn-success"
								data-dismiss="modal"
								onClick={(e) => updateSteps(e)}
							>
								OK
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditStep;
