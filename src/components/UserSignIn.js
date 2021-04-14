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
				<h1 className="mb-5 text-danger">Under udarbejdelse</h1>
				<form onSubmit={handleSubmit}>
					<label>
						Email:
						<input
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label>
						Password:
						<input
							type="text"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>

					<input type="submit" value="Submit" />
				</form>
				<h1>Email: {email}</h1>
				<h1>Password: {password}</h1>
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
