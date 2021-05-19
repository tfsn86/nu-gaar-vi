import React, { Fragment, useState } from 'react';

const EditSteps = ({ step }) => {
	const [steps, setSteps] = useState(step.steps);

	// Edit steps function
	const updateSteps = async (e) => {
		e.preventDefault();
		try {
			const body = { steps };
			// eslint-disable-next-line
			const response = await fetch(`/steps/${step.step_id}`, {
				method: 'PUT',
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
								className="btn btn-warning"
								data-dismiss="modal"
								onClick={(e) => updateSteps(e)}
							>
								OK
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-dismiss="modal"
								onClick={() => {
									setSteps(step.steps);
								}}
							>
								Luk
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditSteps;
