import { Fragment, useState } from 'react';

const UserSignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		alert(`Submitting email ${email} and password ${password}`);
	};
	return (
		<Fragment>
			<div className="container">
				<form className="mt-5" onSubmit={handleSubmit}>
					<div className="form-group">
						<label for="email">Email:</label>

						<input
							type="email"
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<small id="emailHelp" class="form-text text-muted">
							Din email deles ikke med andre
						</small>
					</div>
					<div className="form-group">
						<label for="password">Password:</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit" class="btn btn-primary">
						Log ind
					</button>
				</form>

				<div className="mt-5 text-danger text-center">
					Test useState
					<h5>Email: {email}</h5>
					<h5>Password: {password}</h5>
				</div>
			</div>
		</Fragment>
	);
};

// const [name, setName] = useState('');

// const handleSubmit = (evt) => {
// 	evt.preventDefault();
// 	alert(`Submitting Name ${name}`);
// };
// return (
// 	<form onSubmit={handleSubmit}>
// 		<label>
// 			Frirst Name:
// 			<input
// 				type="text"
// 				value={name}
// 				onChange={(e) => setName(e.target.value)}
// 			/>
// 		</label>

// 		<input type="submit" value="Submit" />
// 		<h1>{name}</h1>
// 	</form>
// );

export default UserSignIn;
