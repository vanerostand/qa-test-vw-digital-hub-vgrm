# QA Test E2E - VW Digital Hub

## Introduction

This repository contains both the developer's code and the E2E tests for the VW Digital Hub project, implemented using Playwright.

## Co-located E2E Testing Strategy

The decision to put the E2E tests and the app within the same repository was to ensure access to both front-end and back-end code. This is particularly important because some E2E tests require interaction with the application's API endpoints for setup or validation purposes.

In the `app` folder, you will find the code provided for this project.

In the `e2e` folder, you will find all E2E-related files: e2e tests, documentation (test cases and bug reporting), and configuration files.

## How to Run the E2E Tests

1. Run the application by following the instructions in the [README.md](./app/README.md) file located in the app folder.

2. Execute the E2E tests by following the instructions in the [README.md](./e2e/README.md) file located in the e2e folder.

## Conclusion

The develpment of the automation tests is the first iteration since the app is still under development and the tests will be updated as the app evolves. The current version of the app is not ready for production. In the documentation folder, you will find the test cases and bugs reporting.

## Author

***Vanesa Rostand Mancera***
