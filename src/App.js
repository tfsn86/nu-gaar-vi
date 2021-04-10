import './App.css';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			{/* Jumbotron */}
			<div class="jumbotron jumbotron-fluid bg-light text-dark mb-2">
				<div class="container text-sm-center pt-5">
					<h1 class="display-4">Nu går vi et skridt ad gangen</h1>
				</div>
			</div>

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

export default App;
