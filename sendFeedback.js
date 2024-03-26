const nodemailer = require('nodemailer');

export default async function sendFeedback(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      // Configure transporter options (e.g., SMTP settings)
    });

    // Set up email content
    let mailOptions = {
      from: `${name} <${email}>`,
      to: 'your-email@example.com', // Change this to your actual email address
      subject: 'Feedback from Coffee Digital Website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Feedback sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Oops! Something went wrong. Please try again later.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}