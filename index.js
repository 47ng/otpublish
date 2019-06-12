const otplib = require('otplib')

function main() {
  const key = process.env.OTP_SECRET_KEY
  const token = otplib.authenticator.generate(key)
  console.log(token)
}

if (require.main === module) {
  main()
}
