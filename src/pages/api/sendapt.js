import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'jimmywingert@gmail.com', // Your email where you'll receive emails
      from: 'jamespwingert@gmail.com', // your website email address here
      first: `${req.body.first}`,
      last: `${req.body.last}`,
      gender: `${req.body.gender}`,
      phone: `${req.body.phone}`,
      email: `${req.body.email}`,
      insurname: `${req.body.insurname}`,
      insurnum: `${req.body.insurnum}`,
      voicemail: `${req.body.voicemail}`,
      subject: `${req.body.subject}`,

      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Neurology and Sleep</title>
        <meta name="description" content="Neurology and Sleep">
        <meta name="author" content="Neurology and Sleep">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>${req.body.subject}</h3> 
              <br></br> 
              <h3>Name: ${req.body.first} &nbsp;  ${req.body.last}</h3> 
              <br></br> <h3>Email: ${req.body.email}</h3>
              <br></br> <h3>Phone: ${req.body.phone} </h3>
              <br></br> <h3>Gender: ${req.body.gender}</h3>
              <br></br> <h3>Insurance: ${req.body.insurname} </h3>
              <br></br> <h3>ID: ${req.body.insurnum}</h3>
              <br></br> <h3>Okay to leave voicemail?: ${req.body.voicemail} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
             
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error.response.body);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
