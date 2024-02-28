# Hello World Monorepo

Welcome to the Hello World Monorepo, a project that combines a React frontend and an Express.js backend into a single repository for ease of development and deployment.

## Introduction

This monorepo is structured to include both client-side and server-side applications, utilizing `concurrently` for simultaneous development workflows. The React application resides in `app/client`, and the Express.js server is located in `app/server`.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (LTS version is recommended)
- npm or yarn

## Installation

Clone the repository and install dependencies as follows:

`git clone git@github.com:kmiller9393/hello-world-monorepo.git`

Ensure you are in the root of the project and run `npm install` or `yarn` to install dependencies.

`cd` into `app/client` and run `npm install` or `yarn` as well to ensure the client-side application's dependencies are installed and navigate back to the root of the project once they are.

## To Start the App

Run `npm start` or `yarn start` from the root of project. This app leverages `concurrently` to run the Express.js server and the React application simultaneously.

## Project Structure

- `app/`: Contains the source code for both the client and server applications.
  - `client/`: React application code.
  - `server/`: Express.js server code.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more details.
