

const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = () =>{
    sgMail.send({
        to: email,
        from: 'jharahul223@gmail.com',
        subject: 'Thanks for joining in!',
        text:  ` Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

module.exports = {
    sendWelcomeEmail
}
