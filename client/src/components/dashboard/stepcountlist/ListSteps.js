import React, { Fragment, useEffect, useState } from 'react';
import getCurrentWeeknumber from '../../utils/getCurrentWeeknumber';

import EditSteps from './EditStep';

const ListSteps = ({ setStepsChange }) => {
	const [steps, setSteps] = useState([]);
	const [weeklyInput, setWeeklyInput] = useState(getCurrentWeeknumber()); // the users current week should be default

	const weekNumberArray = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
		41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
	];

	// Get weekly user step count
	const getWeeklyUserStepCount = async () => {
		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { weeklyInput };

			const response = await fetch('/dashboard/weeklysteps', {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			const parseData = await response.json();

			const alterData = parseData.map((data) => {
				const options = {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				};
				const container = {
					step_id: data.step_id,
					steps: data.steps,
					date_count: new Date(data.date_count).toLocaleDateString(
						'dk-DK',
						options
					),
				};
				return container;
			});

			setSteps(alterData);
		} catch (error) {
			console.error(error.message);
		}
	};

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
		getWeeklyUserStepCount();
	}, [weeklyInput]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Fragment>
			<div className="container">
				<form className="mt-5">
					<div className="d-flex mb-3 justify-content-center align-items-center">
						<label className="mr-2 col-form-label" htmlFor="selectWeek">
							<strong>Vis uge</strong>
						</label>
						<div>
							<select
								className="justify-content-center align-items-center"
								id="selectWeek"
								value={weeklyInput}
								onChange={(e) => setWeeklyInput(e.target.value)}
							>
								{weekNumberArray.map((weeknum) => {
									return (
										<option
											className="text-center"
											value={weeknum}
											key={weeknum}
										>
											{weeknum}
										</option>
									);
								})}
							</select>
						</div>
					</div>
				</form>
			</div>
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
