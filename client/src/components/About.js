import { Fragment } from 'react';

const About = () => {
	return (
		<Fragment>
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">Walk walk</h6>
						<p>
							Dette er en fyldtekst, hvor vi kan finde noget relevant at skrive
							om vores "kampagne" eller applikation.
						</p>
					</div>

					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">Lorem ipsum</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							sit amet felis at mauris vulputate vestibulum. Integer nec eros
							odio. Sed sit amet tortor et felis suscipit consequat eget id
							neque. Pellentesque ut rhoncus augue, eget ornare neque. Proin a
							vulputate neque. Donec egestas quam id diam iaculis, vel volutpat
							orci dapibus. Fusce pretium aliquet mattis. Maecenas sit amet ex
							et nisi ornare sagittis.
						</p>
					</div>
					<div className="col-sm">
						<h6 className="font-italic font-weight-bolder">Holdet</h6>
						<p>Skattebasserne står bag udviklingen af applikation.</p>
						<span>
							Holdet:
							<ul>
								<li>Torben (CEO)</li>
								<li>Rikke (CEO)</li>
								<li>Sarah (CEO)</li>
								<li>Charlotte (CEO)</li>
								<li>Mia (CEO)</li>
							</ul>
						</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
