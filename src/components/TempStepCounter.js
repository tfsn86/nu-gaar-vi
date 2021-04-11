function TempStepCounter() {
	return (
		<>
			<div className="container">
				{/* Table */}
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
							<td>Indtast skridt</td>
						</tr>
						<tr>
							<td>10. april</td>
							<td>Lørdag</td>
							<td>Indtast skridt</td>
						</tr>
						<tr>
							<td>11. april</td>
							<td>Søndag</td>
							<td>Indtast skridt</td>
						</tr>
						<tr>
							<td>12. april</td>
							<td>Mandag</td>
							<td>Indtast skridt</td>
						</tr>
						<tr>
							<td>13. april</td>
							<td>Tirsdag</td>
							<td>Indtast skridt</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export default TempStepCounter;
