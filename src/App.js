import { Fragment } from 'react';
import './App.css';

function App() {
	return (
		<Fragment>
			{/* Navigation bar */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link" href="http://ufst.dk">
								Om
							</a>
							<a className="nav-link" href="http://ufst.dk">
								Log ind
							</a>
							<a className="nav-link" href="http://ufst.dk">
								Tilmeld
							</a>
						</div>
					</div>
				</div>
			</nav>

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
		</Fragment>
	);
}

export default App;
