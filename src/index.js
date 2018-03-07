"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
require("./index.css");
ReactDOM.render(<App_1["default"] />, document.getElementById('root'));
registerServiceWorker_1["default"]();
