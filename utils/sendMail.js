const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendGridKey = process.env.SENDGRID_API_KEY;

function sendEmail(userEmail, token, host) {
	sgMail.setApiKey(sendGridKey);
	const msg = {
		to: userEmail,
		from: 'no-reply@nugårvi.dk',
		subject: 'Nulstilling af kodeord',
		html: `
		<div>
			<br>
			<p>Du har på nugårvi.dk anmodet om nulstilling af dit kodeord</p>
				<a href="${host}/reset-password/${token}">Nulstil kodeord her</a>
			</p>
		</div>
   `,
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
}

module.exports = sendEmail;
