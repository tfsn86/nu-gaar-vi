import React from 'react';

const UserStatistics = ({ allSteps }) => {
	const totalUserSteps = allSteps.reduce((acc, curr) => acc + curr.steps, 0);

	// user steps last 30 days
	const currentDate = new Date();
	const currentDateTime = currentDate.getTime();
	const last30DaysDateTime = new Date(
		currentDate.setDate(currentDate.getDate() - 30)
	);

	const last30DaysList = allSteps
		.filter((x) => {
			const elementDateTime = new Date(x.date_count).getTime();
			if (
				elementDateTime <= currentDateTime &&
				elementDateTime > last30DaysDateTime
			) {
				return true;
			}
			return false;
		})
		.sort((a, b) => {
			return new Date(b.date_count) - new Date(a.date_count);
		});

	const last30DaysUserSteps = last30DaysList.reduce(
		(acc, curr) => acc + curr.steps,
		0
	);

	// user steps last 7 days
	const last7DaysDateTime = new Date(
		currentDate.setDate(currentDate.getDate() + 23)
	);

	const last7DaysList = allSteps
		.filter((x) => {
			const elementDateTime = new Date(x.date_count).getTime();
			if (
				elementDateTime <= currentDateTime &&
				elementDateTime > last7DaysDateTime
			) {
				return true;
			}
			return false;
		})
		.sort((a, b) => {
			return new Date(b.date_count) - new Date(a.date_count);
		});

	const last7DaysUserSteps = last7DaysList.reduce(
		(acc, curr) => acc + curr.steps,
		0
	);

	return (
		<div className="my-5 h7">
			<p>
				Total antal skridt:{' '}
				<span>
					<strong>{totalUserSteps.toLocaleString('dk')}</strong>
				</span>
			</p>
			<p>
				Antal skridt seneste 30 dage:{' '}
				<span>
					<strong>{last30DaysUserSteps.toLocaleString('dk')}</strong>
				</span>
			</p>
			<p>
				Antal skridt seneste uge:{' '}
				<span>
					<strong>{last7DaysUserSteps.toLocaleString('dk')}</strong>
				</span>
			</p>
		</div>
	);
};

export default UserStatistics;
