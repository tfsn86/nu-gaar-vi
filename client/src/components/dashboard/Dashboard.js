import React, { useState, useEffect } from 'react';

import InputStep from './stepcountlist/InputStep';
import ListSteps from './stepcountlist/ListSteps';
import UserStatistics from './stepcountlist/UserStatistics';

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
			<div className="container">
				<UserStatistics allSteps={allSteps} />
				<InputStep setStepsChange={setStepsChange} />
				<ListSteps allSteps={allSteps} setStepsChange={setStepsChange} />
			</div>
		</div>
	);
};

export default Dashboard;
