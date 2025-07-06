# QA Test E2E - VW Digital Hub

This repository contains E2E tests for the VW Digital Hub project using Playwright.

## Pre-requisites

Before running the tests, ensure you have the following pre-requisites:

- Node.js
- npm

## Installation

To install this E2E, clone this repository and run the following command:

```bash
npm install
```

### Running the tests

```bash
npx playwright test
```

### Reporting

```bash
npx playwright show-report
```

### Running the tests in headless mode

```bash
npx playwright test --headed=false
```

### Running with Docker

```bash
docker build -t qa-test-vwdh-vr .
docker run qa-test-vwdh-vr
```

## Documentation

Test suite created are documented in the following link:

- 🧪 [Test Cases](./documentation/TestCases.md)

Bugs reporting are documented in the following link:

- 🐛 [Bug Reporting](./documentation/JiraTickets.md)

### Author

***Vanesa Rostand***
