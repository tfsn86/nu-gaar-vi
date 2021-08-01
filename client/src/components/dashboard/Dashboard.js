import React, { useState, useEffect } from 'react';

import InputStep from './stepcountlist/InputStep';
import ListSteps from './stepcountlist/ListSteps';

const Dashboard = ({ setAuth }) => {
	const [allSteps, setAllsteps] = useState([]);
	const [stepsChange, setStepsChange] = useState(false);

	const getProfile = async () => {
		try {
			const response = await fetch('/dashboard/steps', {
				method: 'GET',
				headers: { jwt_token: localStorage.token },
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

			setAllsteps(alterData);
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		getProfile();
		setStepsChange(false);
	}, [stepsChange]);

	return (
		<div>
			{/* Jumbotron */}
			<div className="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div className="container text-sm-center pt-5">
					<h1 className="display-4 font-weight-lighter font-italic">
						Små skridt, store drømme
					</h1>
				</div>
			</div>
			<div className="container">
				<InputStep setStepsChange={setStepsChange} />
				<ListSteps allSteps={allSteps} setStepsChange={setStepsChange} />
			</div>
		</div>
	);
};

export default Dashboard;
