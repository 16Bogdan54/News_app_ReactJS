const sg = require('@sendgrid/mail')

const {SG_API_KEY} = process.env;

sg.setApiKey(SG_API_KEY)

module.exports = sg;