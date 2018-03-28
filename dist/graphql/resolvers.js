'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    books: function books() {
      return _data2.default;
    },
    series: function series(_, _ref) {
      var _series = _ref.series;
      return _data2.default.filter(function (book) {
        return book.series.toLowerCase() === _series.toLowerCase();
      });
    }
  }
};