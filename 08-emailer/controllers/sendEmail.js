require('dotenv').config()

const nodemailer = require('nodemailer')
const message = {
 to: "this@that.net",
 from: "Abdi Tor <Abdi.tor@west-mec.org",
 subject: "Node Mailer Test",
 html: "<h1>TESTING</h1> <p> this is a automated test for the node mailer liberay </p>"
}

const sendEmail = async (req, res) =>  {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'muscmamifwxpj465@ethereal.email',
            pass: process.env.MAILER_PASS,
        },
    });

    const info = await transporter.sendMail(message);

    res.json(info)

};

router.get('/reset', (req, res) => res.render('reset.html'))
router.post('/reset', async (req, res) => {
  /* Flash email address for pre-population in case we redirect back to reset page. */
  req.flash('email', req.body.email)
  /* Check if user with provided email exists. */
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    req.flash('error', 'User not found')
    return res.redirect('/reset')
  }
  /* Create password reset token and save in collection along with user. 
     If there already is a record with current user, replace it. */
  const token = v4().toString().replace(/-/g, '')
  PasswordReset.updateOne({ 
    user: user._id 
  }, {
    user: user._id,
    token: token
  }, {
    upsert: true
  })
  .then( updateResponse => {
    /* Send email to user containing password reset link. */
    const resetLink = `${process.env.DOMAIN}/reset-confirm/${token}`
    console.log(resetLink)
    req.flash('success', 'Check your email address for the password reset link!')
    return res.redirect('/login')
  })
  .catch( error => {
    req.flash('error', 'Failed to generate reset link, please try again')
    return res.redirect('/reset')
  })
})

module.exports = sendEmail;