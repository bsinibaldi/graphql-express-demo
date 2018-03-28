'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Schema Explanation:
// All types defined first, followed by inputs, then queries and mutations
var typeDefs = '\ntype Book {\n  title: String,\n  author: String\n  series: String\n}\ntype Query {\n  books: [Book]\n  series(series: String): [Book]\n}\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers2.default });