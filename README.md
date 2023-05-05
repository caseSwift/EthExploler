# Chain Explorer ETH

The main purpose of this app is to track ETH transactions and the amount of ETH on specific addresses at a given time.

## Getting Started

To run this app, you will need to have Node.js installed.

## Installation

Please refer to the Node.js and React documentation, and run `npm install` in the project directory to install dependencies.

## Running the Application

You will need two different terminal instances: one for Node.js and one for React. For Node.js, type in `node server.js`. For React, move inside the React project with `cd front` and then type `npm start` to start the server.

## API Reference

- `/transactions/:address/:startingBlock`: Returns all transactions from the given address from the given block.
- `/balance/:address/:timestamp`: Returns the amount of coin at the given address at the given point of time.

## Frontend

The frontend is a React app with a few inputs and an AJAX call to the backend server.

## Note

I left my API keys for external sources that are used for connecting to the blockchain for simplicity reasons. Please don’t misuse them. :)

## Backend

Standard libraries were used for connecting to the blockchain (web3), creating the server (Express), and using a third-party API (Alchemy).

## License

This project is under the MIT license.