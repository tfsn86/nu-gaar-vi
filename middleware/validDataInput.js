module.exports = function (req, res, next) {
	const { steps } = req.body;

	function validStepInput(userStep) {
		return /\d/.test(userStep);
	}

	if (req.path === '/steps') {
		if (![steps].every(Boolean)) {
			return res.json('Manglende skridtindtastning. Prøv igen');
		} else if (!validStepInput(steps)) {
			return res.json('Ugyldigt format. Forsøg igen med talformat');
		}
	}

	next();
};
