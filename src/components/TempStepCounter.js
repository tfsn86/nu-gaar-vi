import React, { Fragment } from 'react';

const TempStepCounter = () => {
	return (
		<Fragment>
			{/* Jumbotron */}
			<div className="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div className="container text-sm-center pt-5">
					<h1 className="display-4 font-weight-lighter font-italic">
						Små skridt, store drømme
					</h1>
				</div>
			</div>
			<div className="container text-center mt-5">
				{/* Table */}
				<form method="get" id="table-form"></form>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Dato</th>
							<th>Dag</th>
							<th>Antal Skridt</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>9. april</td>
							<td>Fredag</td>
							<td>
								<input
									type="text"
									placeholder="Indtast skridt"
									name="company"
									form="table-form"
									value="6.597"
									readOnly={true}
								/>
							</td>
						</tr>
						<tr>
							<td>10. april</td>
							<td>Lørdag</td>
							<td>
								<input
									type="text"
									placeholder="Indtast skridt"
									name="company"
									form="table-form"
									value="2.568"
									readOnly={true}
								/>
							</td>
						</tr>
						<tr>
							<td>11. april</td>
							<td>Søndag</td>
							<td>
								<input
									type="text"
									placeholder="Indtast skridt"
									name="company"
									form="table-form"
								/>
							</td>
						</tr>
						<tr>
							<td>12. april</td>
							<td>Mandag</td>
							<td>
								<input
									type="text"
									placeholder="Indtast skridt"
									name="company"
									form="table-form"
								/>
							</td>
						</tr>
						<tr>
							<td>13. april</td>
							<td>Tirsdag</td>
							<td>
								<input
									type="text"
									placeholder="Indtast skridt"
									name="company"
									form="table-form"
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<button
					type="button"
					form="table-form"
					className="btn btn-primary btn-lg mt-3 mb-5"
				>
					Gem
				</button>
			</div>
		</Fragment>
	);
};

export default TempStepCounter;
