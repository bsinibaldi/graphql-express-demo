'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: _schema2.default }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.listen(4000, function () {
  console.log("GraphQL server started");
});