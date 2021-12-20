// Get and set current week
const getCurrentWeeknumber = () => {
	const currentdate = new Date();
	const oneJan = new Date(currentdate.getFullYear(), 0, 1);
	const numberOfDays = Math.floor(
		(currentdate - oneJan) / (24 * 60 * 60 * 1000)
	);
	let currentWeek = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);

	return currentWeek.toString();
};

export default getCurrentWeeknumber;
