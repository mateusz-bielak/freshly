# Freshly

Simple application to get current air quality from stations allocated in Poland. Created for practicing [React Hooks](https://reactjs.org/docs/hooks-intro.html).

- Used air data from http://powietrze.gios.gov.pl
- Contains proxy server for data fetching
- Built with Create React App 2.0
- [See live](https://freshly-hooks.herokuapp.com/)

## Prerequisites

To run app on your local machine you will need [Node.js](https://nodejs.org) (tested with v11.2.0)

## Installation

Install NPM packages for server and client apps:

```
npm install

cd client
npm install
```

You can use yarn for that too:

```
yarn

cd client
yarn
```

## Usage

To run app locally run proxy server at first:

```
npm start
```

Next, go to client directory and start React app:

```
cd client
npm start
```

Freshly app should open in a default browser with url http://localhost:3000
