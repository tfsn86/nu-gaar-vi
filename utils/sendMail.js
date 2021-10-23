const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendGridKey = process.env.SENDGRID_API_KEY;

const devClientURL = 'http://localhost:3000';
const proClientURL = 'https://nugårvi.dk';

function sendEmail(userEmail, token) {
	sgMail.setApiKey(sendGridKey);
	const msg = {
		to: userEmail,
		from: 'tfsn86@gmail.com',
		subject: 'Nulstilling af kodeord',
		html: `
		<br>
		<p>Du har på nugårvi.dk anmodet om nulstilling af dit kodeord</p>
     <a href="${
				process.env.NODE_ENV === 'production' ? proClientURL : devClientURL
			}/reset-password/${token}">Nulstil kodeord her</a>
		</p>
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
