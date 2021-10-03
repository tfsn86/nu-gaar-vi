import { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">
							"Nu går vi"-applikationen
						</h6>
						<p>
							"Nu går vi"-applikationen er til alle, der gerne vil holde styr
							på, hvor mange skridt de går hver dag. Det eneste det kræver af
							dig er, at du indtaster dine skridt løbende.
						</p>
					</div>

					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">
							Nye funktionaliteter på vej
						</h6>
						<p>
							Der vil løbende komme nye features i app'en. Det vil bl.a. blive
							muligt at dyste mod venner, familie m.fl. om at gå flest skridt.
							Det vil senere også blive muligt at oprette hold og dyste mod
							andre hold.
						</p>
					</div>
					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">
							Om app-udviklingen
						</h6>
						<p>
							Applikationen er udviklet som et hobbyprojekt af Torben Florup
							Schytt-Nielsen.
							<br />
							<br />
							Flere af Torbens projekter kan findes på
							<a href="https://tfsn.dk" target="_blank" rel="noreferrer">
								{' '}
								tfsn.dk
							</a>
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
