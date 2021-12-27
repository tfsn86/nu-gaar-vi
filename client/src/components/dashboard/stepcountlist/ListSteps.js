import React, { Fragment, useEffect, useState } from 'react';

import EditSteps from './EditStep';

const ListSteps = ({ setStepsChange }) => {
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1;
	const currentYear = currentDate.getFullYear();

	const [steps, setSteps] = useState([]);
	const [monthInput, setMonthInput] = useState(currentMonth);
	const [yearInput, setYearInput] = useState(currentYear);

	const monthArray = [
		{ monthNumber: 1, monthName: 'Januar' },
		{ monthNumber: 2, monthName: 'Februar' },
		{ monthNumber: 3, monthName: 'Marts' },
		{ monthNumber: 4, monthName: 'April' },
		{ monthNumber: 5, monthName: 'Maj' },
		{ monthNumber: 6, monthName: 'Juni' },
		{ monthNumber: 7, monthName: 'Juli' },
		{ monthNumber: 8, monthName: 'August' },
		{ monthNumber: 9, monthName: 'September' },
		{ monthNumber: 10, monthName: 'Oktober' },
		{ monthNumber: 11, monthName: 'November' },
		{ monthNumber: 12, monthName: 'December' },
	];

	const yearArray = [2021, 2022];

	// Get weekly user step count
	const getMonthUserStepCountInput = async () => {
		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { monthInput, yearInput };

			const response = await fetch('/dashboard/yearmonthsteps', {
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
		getMonthUserStepCountInput();
	}, [monthInput, yearInput]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<Fragment>
			<div className="container mt-3">
				<div className="row d-flex justify-content-center">
					<div className="col-2 text-center">
						<form>
							<label className="mr-2 col-form-label" htmlFor="selectYear">
								<strong>Vælg år</strong>
							</label>

							<div className="col">
								<select
									className="justify-content-center align-items-center"
									id="selectyear"
									value={yearInput}
									onChange={(e) => setYearInput(e.target.value)}
								>
									{yearArray.map((year) => {
										return (
											<option className="text-center" value={year} key={year}>
												{year}
											</option>
										);
									})}
								</select>
							</div>
						</form>
					</div>

					<div className="col-2 text-center">
						<form>
							<label className="mr-2 col-form-label" htmlFor="selectMonth">
								<strong>Vælg måned</strong>
							</label>
							<div>
								<select
									className="justify-content-center align-items-center"
									id="selectMonth"
									value={monthInput}
									onChange={(e) => setMonthInput(e.target.value)}
								>
									{monthArray.map((month) => {
										return (
											<option
												className="text-center"
												value={month.monthNumber}
												key={month.monthNumber}
											>
												{month.monthName}
											</option>
										);
									})}
								</select>
							</div>
						</form>
					</div>
				</div>
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
