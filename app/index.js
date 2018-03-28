import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import schema from './graphql/schema';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.listen(4000, () => {
  console.log("GraphQL server started");
});

