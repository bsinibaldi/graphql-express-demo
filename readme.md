# Sample GraphQL Server
#### Built using ExpressJS, Apollo Server, Webpack, and Babel
##### Intened to be a ready-made sample server for learning/testing client graphql code

## Setup
* Clone repo, run `yarn` to install dependencies
* Run `yarn dev` to compile and start the server

## Usage
* Start server (see setup)
* Hit `localhost:4000/graphql` with your desired query

## Structure
* `app` directory holds all relevant code
* `app/graphql` contains three files:
  * `data.js`
    * Simply sample data
  * `resolver.js`
    * Defines how each graphql query can be resolved
  * `schema.js`
    * Defines the data structure, and what queries are available
