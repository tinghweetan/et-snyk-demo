# SkyEye-Daily-Test

## NPM

### `npx tsc`

### `npm install`

This script will install all the dependencies for the project.

### `Update to your username and password`

The root directory add local-config.ts file, and update to your username and password. for example: { "userName": "userName", "userPassword": "userPassword" }

### `npm test`

Runing all UI Automated Tests.

### `npm run test:report`

To see the test report

### `npm run coverage`

To see the coverage report

# What does the Dockerfile describe
1. It uses ubuntu, which is a popular choice when using docker.
2. It installs google chrome, which is a dependency that the selenium webdriver needs.
3. It installs nodejs, which includes the runtime that the tests needs.
4. Its working directory is `/usr/src/app`.
5. Copy the `package.json` file from the host to the container and run `npm install`.
6. Copy the code from this repository to the working directory of the container.
7. Run `npm run test:report` to generate the `daily-report` folder.
8. Execute `node sendMail` to send the `daily-test-results.html` file to a list of email addresses.

# How to extract the daily-report folder from Docker

docker cp &lt;container id&gt;:/usr/src/app/daily-report .