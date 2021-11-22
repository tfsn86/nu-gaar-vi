import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import da from 'date-fns/locale/da';

registerLocale('da', da);

const InputStep = ({ setStepsChange }) => {
	const [steps, setSteps] = useState('');
	const [startDate, setStartDate] = useState(new Date());

	const onSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const myHeaders = new Headers();

			myHeaders.append('Content-Type', 'application/json');
			myHeaders.append('jwt_token', localStorage.token);

			const body = { steps, startDate };

			// eslint-disable-next-line
			const response = await fetch('/dashboard/steps', {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify(body),
			});

			const parseRes = await response.json();

			if (parseRes === 'Manglende skridtindtastning. Prøv igen') {
				toast.error(parseRes);
			} else if (parseRes === 'Ugyldigt format. Forsøg igen med talformat') {
				toast.error(parseRes);
			} else if (
				parseRes === 'Der er allerede indtastet skridt for denne dato!'
			) {
				toast.error(parseRes);
			}

			setStepsChange(true);
			setSteps('');
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<Fragment>
			<div className="container mt-5">
				{/* Step count component */}

				<form onSubmit={onSubmitForm}>
					<div className="row mb-3">
						<label htmlFor="inputDato" className="col-sm-3 col-form-label">
							Vælg dato
						</label>
						<div className="col-sm-8 d-flex justify-content-center align-items-center">
							<DatePicker
								locale="da"
								dateFormat="d. MMMM yyyy"
								selected={startDate}
								onChange={(date) => setStartDate(date)}
								className="form-control mb-3 text-center"
								id="inputDato"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<label htmlFor="inputSteps" className="col-sm-3 col-form-label">
							Indtast antal skridt
						</label>
						<div className="col-sm-8 d-flex justify-content-center align-items-center">
							<input
								type="text"
								className="form-control mb-1"
								value={steps}
								onChange={(e) => setSteps(e.target.value)}
								id="inputSteps"
							/>
						</div>
					</div>
					<div className="text-center">
						<button className="btn btn-primary">Tilføj</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default InputStep;
