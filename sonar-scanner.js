/* eslint-disable @typescript-eslint/no-require-imports */
const sonarqubeScanner = require('sonarqube-scanner');
require('dotenv').config();
sonarqubeScanner.default(
  {
    serverUrl: process.env.SONAR_URL, // Replace with your actual SonarQube URL
    token: process.env.SONAR_TOKEN, // Replace with your actual token
    options: {
      'sonar.projectKey': process.env.SONAR_PROJECT_KEY,
      'sonar.projectName': process.env.SONAR_PROJECT_NAME,
      'sonar.sources': './',
      'sonar.exclusions': '**/node_modules/**, **/*.spec.ts, **/*.test.ts',
    },
  },
  () => {
    console.log('SonarQube scan completed.');
    process.exit();
  },
);
