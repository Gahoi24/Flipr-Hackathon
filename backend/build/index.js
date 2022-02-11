"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 5000;

const router = _express.default.Router();

app.use((0, _cors.default)());
app.use((0, _morgan.default)('dev'));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.get('/', (req, res) => {
  res.send("Hello World");
});
app.listen(port, async () => {
  console.log("Server started at Port " + port);
});
//# sourceMappingURL=index.js.map