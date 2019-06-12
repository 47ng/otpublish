# `otpublish`

Generate a OTP token to publish on NPM with 2FA protection.

It will read the OTP secret key from the `OTP_SECRET_KEY` environment
variable, and print the generated OTP token to the standard output.

Use this in your CI to automate package publishing, but make sure to
keep the OTP secret secure ! (eg: using encrypted environment variables)

## Installation

Example with Travis CI:

```yml
language: node_js

node_js:
  - node

cache: yarn

script:
  - yarn ci

deploy:
  provider: npm
  email: 'foo.bar@example.com'
  on:
    tags: true
```

Now to setup secure deployments, you'll need an NPM token to authenticate
against the NPM API, which can be generated on npmjs.com in
settings > tokens.

Pass it to Travis to encrypt it:

```shell
$ travis encrypt YOUR_AUTH_TOKEN --add deploy.api_key
```

Then copy your OTP secret key and encrypt it with travis as well:

```shell
$ travis encrypt YOUR_OTP_SECRET_KEY --add env.OTP_SECRET_KEY
```
