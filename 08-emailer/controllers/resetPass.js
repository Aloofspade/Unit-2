require('dotenv').config()


const nodemailer = require('nodemailer')

const message = {
    to: "reset.password@that.net",
    from: "Abdi Tor <Abdi.tor@west-mec.org",
    subject: "Node Reset Password",
    html: "<h1>TESTING</h1> <p> this is a automated test for the node mailer liberay </p>"
   }

   const resetPass = async (req, res) =>  {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'muscmamifwxpj465@ethereal.email',
            pass: process.env.MAILER_PASS,
        },
    });

    const info = await transporter.resetPass(message);

    

    res.json(info)
};

module.exports = resetPass;