const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const sendGridKey = process.env.SENDGRID_API_KEY;

function sendEmail(userEmail, token) {
	sgMail.setApiKey(sendGridKey);
	const msg = {
		to: userEmail,
		from: 'tfsn86@gmail.com',
		subject: 'Nulstilling af kodeord',
		html: `
     <a href="${clientURL}/reset-password/${token}">${token}</a>
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
