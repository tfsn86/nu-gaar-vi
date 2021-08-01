import React, { Fragment, useEffect, useState } from 'react';

import EditSteps from './EditStep';

const ListSteps = ({ allSteps, setStepsChange }) => {
	const [steps, setSteps] = useState([]);

	// Delete step function
	const deleteStep = async (id) => {
		try {
			// eslint-disable-next-line
			const deleteStepCount = await fetch(`/dashboard/steps/${id}`, {
				method: 'DELETE',
				headers: { jwt_token: localStorage.token },
			});

			setSteps(steps.filter((step) => step.step_id !== id));
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		setSteps(allSteps);
	}, [allSteps]);

	return (
		<Fragment>
			<table className="table mt-5 text-center">
				<thead>
					<tr>
						<th>Dato</th>
						<th>Antal skridt</th>
						<th>Rediger</th>
						<th>Slet</th>
					</tr>
				</thead>

				<tbody>
					{steps.length !== 0 &&
						steps[0].step_id !== null &&
						steps.map((step) => (
							<tr key={step.step_id}>
								<td>{step.date_count}</td>
								<td>{step.steps}</td>
								<td>
									<EditSteps step={step} setStepsChange={setStepsChange} />
								</td>
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
		</Fragment>
	);
};

export default ListSteps;
