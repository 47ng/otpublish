# ⏱️🔐 `otpublish`

Generate a OTP token to publish on NPM with 2FA protection.

It will read the OTP secret key from the `OTP_SECRET_KEY` environment
variable, and print the generated OTP token to the standard output.

## Installation

```shell
$ yarn global add otpublish
# or
$ npm i -g otpublish
```

## Usage with `npm publish`

```shell
$ npm publish --otp $(otpublish)
```

## Security

⚠️ Keep your 2FA OTP secret key safe ! Don't store it unencrypted, and beware of shell history.

You can use some [native tools](https://stackoverflow.com/questions/749544/pipe-to-from-the-clipboard-in-bash-script)
to paste from the clipboard when running in interactive mode to avoid
it showing on the command history, and if using it on a CI server, make
sure they encrypt your secret environment variables. If they don't, you
should probably look for another service.
